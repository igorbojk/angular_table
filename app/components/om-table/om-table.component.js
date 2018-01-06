
class OmTableController {

    constructor(tableDataService) {
        this.tableDataService = tableDataService;
    }   

    $onInit() {
    }

    get test(){
        return this.tableDataService.test;
    }
  
}

OmTableController.$inject = ['tableDataService'];

export default angular.module('app.components.om-table', [])
    .component('omTable', {
        templateUrl: '../app/components/om-table/om-table.template.html',
        controller: OmTableController,
        controllerAs: 'vm',
        bindings: {
        }
    })
    .name;


