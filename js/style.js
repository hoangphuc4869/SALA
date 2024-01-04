var allSelect = document.querySelector.bind(document);
var all = document.querySelectorAll.bind(document);

var buttonEvent = all('.btn-combo');
var contentEvent = all('.tab-combo');

buttonEvent.forEach((tab, index) => {
    var content = contentEvent[index];

    tab.onclick = function () {

        allSelect('.btn-combo.active-btn').classList.remove('active-btn');
        allSelect('.tab-combo.active-combo').classList.remove('active-combo');

        this.classList.add('active-btn');
        content.classList.add('active-combo');

    }
});