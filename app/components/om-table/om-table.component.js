
class OmTableController {

    constructor(tableDataService) {
        this.tableDataService = tableDataService;
        this.tableHeadTitles = this.tableDataService.tableHeadTitles;
    }   

    $onInit() {
        this.tableDataService.getTableData();
    }

    get tableData(){
        return this.tableDataService.tableData;
    }
  
    get total(){
        let total = 0;
        this.tableData.forEach((i)=>{
            total += i.currency 
        });
        return total;
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


