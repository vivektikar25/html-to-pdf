(function(){
    angular.module("app", [])
            .controller("appController", appController);
    function appController(){
        var vm = this;
        vm.to = "Name";
        vm.text = "Hi, \nThere\nI will be there"
        vm.generatePdf = generatePdf;

        function generatePdf(){
            var pdf = new jsPDF('p', 'px', 'a4');
            var options = {
                    pagesplit: true
                };

            pdf.addHTML($(".generatePDF"), options, function()
            {
                pdf.save("Test.pdf");
            });
        } 
    }
})();