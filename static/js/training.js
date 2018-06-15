var app = new Vue({
    el: '#app',
    name: 'Wizard Fat Suction',
    delimiters: ['${', '}'],
    data: {
        wizardFatZoneMap: {
            chin: {
                name: 'Kinn',
                price: 1000
            },
            bellyUpper: {
                name: 'Oberbauch',
                price: 1500
            },
            bellyBottom: {
                name: 'Brust',
                price: "Brust "
            },
            thigh: {
                name: 'Oberschenkel innen',
                price: 1800
            },
            knee: {
                name: 'Knie',
                price: 1200
            },
            back: {
                name: 'Rücken',
                price: 1400
            },
            arm: {
                name: 'Oberarme',
                price: 1700
            },
            hip: {
                name: 'Hüfte',
                price: 1240
            },
            buttocks: {
                name: 'Po',
                price: 25159
            },
            saddleback: {
                name: 'Reiterhosen',
                price: 1214
            },
            calf: {
                name: 'Wade',
                price: 1877
            }
        },
        wizardFatZone: {
            front: [ {
                part: 'bellyUpper',
                class: 'fat-wizard__select-area--belly-upper'
            }, {
                part: 'bellyBottom',
                class: 'fat-wizard__select-area--belly-bottom'
            }, {
                part: 'thigh',
                class: 'fat-wizard__select-area--thigh-left'
            }, {
                part: 'thigh',
                class: 'fat-wizard__select-area--thigh-right'
            }, {
                part: 'knee',
                class: 'fat-wizard__select-area--knee-left'
            }, {
                part: 'knee',
                class: 'fat-wizard__select-area--knee-right'
            }],
            
        },
        selectedZoneList: [],
        hoveredZone: null
    },
    computed: {
        isTouchDevice: function isTouchDevice() {
            return 'ontouchstart' in window || navigator.maxTouchPoints;
        },
        totalPrice: function totalPrice() {
            var _this = this;

            var totalPrice = 0;

            this.selectedZoneList.forEach(function (item, i) {
                totalPrice += _this.wizardFatZoneMap[item].price;
            });

            return totalPrice;
        }
    },
    filters: {
        currency: function currency(value) {
            if (!value) return '';
            var parts = value.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return parts.join(".");
        }
    },
    methods: {
        setHoverZone: function setHoverZone(hoveredZoneName) {
            if (!this.isTouchDevice) {
                this.hoveredZone = hoveredZoneName;
            }
        },
        unsetHoverZone: function unsetHoverZone() {
            if (!this.isTouchDevice) {
                this.hoveredZone = null;
            }
        },
        zoneIsSelected: function zoneIsSelected(zonePart) {
            var indexOfItemOnList = this.selectedZoneList.indexOf(zonePart);

            if (indexOfItemOnList === -1) {
                return false;
            } else {
                return true;
            }
        },
        setSelectedZone: function setSelectedZone(selectedZone) {
            var indexOfItemOnList = this.selectedZoneList.indexOf(selectedZone);

            if (indexOfItemOnList === -1) {
                this.selectedZoneList.push(selectedZone);
            } else {
                this.removeSelectedZone(indexOfItemOnList);
            }
        },
        removeSelectedZone: function removeSelectedZone(indexToRemove) {
            this.selectedZoneList.splice(indexToRemove, 1);
        },
         erledigt: function erledigt(indexToRemove) {
             this.selectedZoneList.splice(indexToRemove, 1);
            console.log(indexToRemove);
        
        }
    }
});