function budget() {
    // method ->> phuong thuc
    var budgetController = (function () {
        // console.log('chay budgetController');
        var data = {
            listItem: {
                exp: [],
                inc: []
            }
        };

        var Expense = function (id, des, val) {
            this.id = id;
            this.des = des;
            this.val = val;
        };

        var Income = function (id, des, val) {
            this.id = id;
            this.des = des;
            this.val = val;
        };

        return {
            addItem: function (type, des, val) {
                // console.log(type, des, val);
                var newItem, id;
                if (type === "exp") {
                    newItem = new Expense(type, des, val);
                }
                if (type === "inc") {
                    newItem = new Income(type, des, val);
                }
                data.listItem[type].push(newItem);
                console.log(data);
                // return newItem;
            }
        };

    })();

    // create ui  --> lay gia tri
    var uiController = (function () {
        // console.log('chay uiController');
        var DOMstring = {
            selecttype: "#type",
            inputdes: "#des",
            inputval: "#val",
            buttonadd: "#add"
        };

        return {
            getInput: function () {
                return {
                    type: document.querySelector(DOMstring.selecttype).value,
                    des: document.querySelector(DOMstring.inputdes).value,
                    val: document.querySelector(DOMstring.inputval).value,
                }
            },

            getDOMstring: function () {
                return DOMstring;
            }
        };
    })();

    // controller -> hanh vi
    var controller = (function (budgeCtrl, uiCtrl) {
        // console.log('chay controller');
        var setupaddevent = function () {
            var getDOM = uiCtrl.getDOMstring();
            var addItemCtrl = function () {
                var newItem, input;
                input = uiCtrl.getInput();
                console.log(input.type, input.des, input.val);
                newItem = budgeCtrl.addItem(input.type, input.des, input.val);
            }
            // console.log('getDOM', getDOM.buttonadd);
            document.querySelector(getDOM.buttonadd).addEventListener('click', addItemCtrl);
        };
        return {
            init: function () {
                return setupaddevent();
            }
        };
    })(budgetController, uiController);

    controller.init();
}

window.addEventListener("load", budget)