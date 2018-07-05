'use strict';

angular.
module('vesselList').
component('vesselList', {
    templateUrl: 'vessel-list/vessel-list.template.html',
    controller: ['$http',
        function ($http) {
            var self = this;
            var isModal = false;
            var articleID;
            var backdrop = document.getElementById('backdrop');

            this.showModal = function (index) {
                if (!isModal) self.createModal(index);
                backdrop.style.display = 'block';
                isModal = true;
                articleID = index;
            };

            this.createModal = function (index) {
                var mymodal = document.createElement('div');
                var myclose = document.createElement('button');
                mymodal.setAttribute('id', 'modal');
                myclose.setAttribute('id', 'close');
                myclose.innerHTML = 'X';
                mymodal.appendChild(myclose);
                self.fetchArticle(index, mymodal);
                self.close(myclose);
                document.getElementById('root').appendChild(mymodal);
            };

            this.destroyModal = function () {
                var target = document.getElementById('modal');
                self.returnArticle();
                backdrop.style.display = 'none';
                target.remove();
                isModal = false;
            };

            this.fetchArticle = function (index, modal) {
                var article = document.getElementById('article_' + index);
                modal.appendChild(article);
            };

            this.returnArticle = function () {
                var article = document.getElementById('article_' + articleID);
                var aside = document.getElementById('placeholder_' + articleID);
                aside.appendChild(article);
            };

            this.close = function (buttonElement) {
                buttonElement.addEventListener('click', function () {
                    self.destroyModal();
                });
            };

            $http.get('vessels/vessels.json').then(function (res) {
                self.vessels = res.data;
            });
        }
    ]
});