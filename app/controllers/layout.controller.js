export default class LayoutController { 
    constructor($timeout, $http){
    	this.$timeout = $timeout;
    	this.$http = $http;
    	this.tableHeadTitles = [
    		'id',
    		'name',
    		'location',
    		'currency',
    	]
    	this.tableData = [];
    	this.isEditNow = false;
    	this.currentEditItem = null;
    	this.currentEditKey = null;
    	this.sortBy = null;
    }

    $onInit() {
        this.getTableData();
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

    get total(){
        let total = 0;
        this.tableData.forEach((i)=>{
            total += i.currency 
        });
        return total;
    }

    editItem(item, key){
    	if(key == 'currency'){
    		this.inputType = 'number';
    	}else{
    		this.inputType = 'string';
    	}
    	item.edit = true;
    	this.isEditNow = true;
    	this.currentEditItem = angular.copy(item);
    	this.currentEditKey = key;
    }

    cancel(item){
    	item.edit = false;
    	this.resetEditSettings();
    }
    saveField(item, key){
    	item[key] = this.currentEditItem[key];
    	item.edit = false;
    	this.resetEditSettings();
    }

    resetEditSettings(){
    	this.isEditNow = false;
    	this.currentEditItem = null;
    	this.currentEditKey = null;
    }
    setSortType(type){
    	if(type == 'id'){
    		return;
    	}
    	this.sortBy = type;
    }
}

LayoutController.$inject = ['$timeout', '$http'];