#data = request.get_json()

	# Add new task for the user

	now = datetime.datetime.now()
	alleworkouts = Task.objects(user=current_user.id).order_by('-created_at')
	latestTask = alleworkouts.first()
	stundenDifferenz = 0
	print(latestTask)

	first_workout = False
	if latestTask != None:
		latestTasktime = latestTask.created_at
		stundenDifferenz = math.floor(((now - latestTasktime).seconds) / 3600)
		print(stundenDifferenz)
	else:
		first_workout = True



	

	if stundenDifferenz < 24 or first_workout == True:

		if first_workout == True:
			workout_nr = "1"
			workout_week = "1"
		else:
			workout_week, workout_nr = workout_class(latestTask, alleworkouts)

		try:
			task_obj = Task()
			task_obj.user = User.objects.get(id=current_user.id)
			task_obj.task_title = "Workout_" + workout_nr
			task_obj.task_content = "Woche_" + workout_week
			task_obj.task_id = str(uuid4())
			task_obj.save()

			return jsonify({'status':True})
		except Exception as e:
			print(e)
			print("bin in except gelandet")
			return jsonify({'status':False})
	else:
		print("Training erst in ", 24-stundenDifferenz)
		return jsonify({'status':False})











#workout class

def workout_class(task,alltasks):


	print(alltasks)

	maxworkouts = 3

	perfekt_week = 0

	workout_split = task.task_title.split("_")
	week_split = task.task_content.split("_")

	workout_nr = int(workout_split[len(workout_split)-1])
	week_nr = int(week_split[len(week_split)-1])

	trainingseinheit_1 = alltasks[workout_nr-1]

	days_over = (datetime.datetime.now() - trainingseinheit_1.created_at).days

#hier weitere wenn funktion mit dem datum
	if workout_nr == maxworkouts and days_over ==7 :
		week_nr +=1
		workout_nr = 1
	else:
		workout_nr +=1

	return str(week_nr), str(workout_nr)



# UPDATE
@app.route("/edit", methods=['POST'])
@login_required
def edit_task():
	data = request.get_json()
	# Edit the particular task

	try:
		task_obj = Task.objects.get(user = current_user.id, task_id = data['task_id'])
		task_obj.task_content = data['task_content']
		task_obj.task_title = data['task_title']
		task_obj.save()

		# Now get all task for this user and return it
		all_tasks = Task.objects(user = current_user.id).order_by('created_at','-created_at')
		his_tasks = []
		for task in all_tasks:
			his_tasks.append({
				'task_title':task.task_title,
				'task_content':task.task_content,
				'task_id':task.task_id
				})
		return jsonify({'status':True,'tasks':his_tasks})
	except DoesNotExist as e:

		return jsonify({'status':False})



# ALL TASKS
@app.route("/tasks", methods=['GET'])
@login_required
def get_tasks():

	try:
		all_tasks = Task.objects(user = current_user.id).order_by('created_at','-created_at')
		latestTask = Task.objects(user=current_user.id).order_by('-created_at').first()
		#his_tasks = []
		latest_workout = {
				'task_title':latestTask.task_title,
				'task_content':latestTask.task_content,
				'task_id':latestTask.task_id,
				'task_time': latestTask.created_at
				}

		return jsonify({'status':True,'tasks':latest_workout})
	except Exception as e:

		return jsonify({'status':False})




# DELETE
@app.route("/delete", methods=['POST'])
@login_required
def delete_task():
	data = request.get_json()
	# Delete the particular task

	try:
		Task.objects.get(user = current_user.id, task_id = data['task_id']).delete()

		# Now get all task for this user and return it
		all_tasks = Task.objects(user = current_user.id).order_by('created_at','-created_at')
		his_tasks = []
		for task in all_tasks:
			his_tasks.append({
				'task_title':task.task_title,
				'task_content':task.task_content,
				'task_id':task.task_id
				})
		return jsonify({'status':True,'tasks':his_tasks})
	except DoesNotExist as e:

		return jsonify({'status':False})





			print("ich bin in calculate workout")
	maxworkout_in_week = 3
	perfekte_woche = False

	last_workout = alleworkouts.first()
	print(last_workout.workout_nr)
	first_workout_ofthe_week = alleworkouts[last_workout.workout_nr-1]
	time_since_first_workout = (datetime.datetime.now() - first_workout_ofthe_week.created_at).days

	if time_since_first_workout<=7 and last_workout.workout_nr<maxworkout_in_week-1:
		last_workout.workout_nr +=1
	elif time_since_first_workout> 7 and last_workout.workout_nr<maxworkout_in_week-1:
		last_workout.workout_nr +=1
	elif time_since_first_workout<=7 and last_workout.workout_nr==maxworkout_in_week-1:
		print("elif gleich max")
		last_workout.workout_nr +=1
		perfekte_woche = True
	elif time_since_first_workout>7 and last_workout.workout_nr>=maxworkout_in_week-1:
		last_workout.week_nr +=1
		last_workout.workout_nr =1
	elif time_since_first_workout<7 and last_workout.workout_nr==maxworkout_in_week:
		last_workout.workout_nr +=1

	print(perfekte_woche)

	try:
		stats_obj = Stats.objects.get(user = current_user.id)
		if perfekte_woche == True:
			print("bin in der PerfektenWoche")
			stats_obj.perfektewoche = stats_obj.perfektewoche +1
		else:
			stats_obj.perfektewoche = stats_obj.perfektewoche
		stats_obj.trainingseinheiten = stats_obj.trainingseinheiten +1
		stats_obj.trainingswochen = last_workout.week_nr
		stats_obj.save()
	except Exception as e:
		print(e)

	return last_workout.workout_nr, last_workout.week_nr