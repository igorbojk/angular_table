export default class tableDataService {
    constructor($http){
    	this.$http = $http;
    	this.tableHeadTitles = [
    		'id',
    		'name',
    		'location',
    		'currency',
    	]
        this.tableData = [];
    }

    getTableData(){
    	this.$http({
    		method: 'GET',
            url: 'test.json',
    	}) 
		.then(response => {
		    this.tableData = response.data;
		});
    }


}

tableDataService.$inject = ['$http'];
