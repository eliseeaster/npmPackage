function TestClass() {
    this.message = "ny klasse";
    this.readOnly = true;
    this.onSave = function(approved) {
        return;
    }
    this.save = function(approved) {
        return this.onSave(approved);
    }
    this.onEdit = function() {
        if ("webAppProxy" in window) 
			webAppProxy.updateDocumentStatus();
        return;
    }
    this.onFinishedLoading = function() {
        if ("webAppProxy" in window) 
			webAppProxy.updateReadOnlyStatus();
        return;
    }
    this.setReadOnlyStatus = function(readOnly) {
        this.readOnly = readOnly;
    }
}
const tester = new TestClass();
//Global variable: (https://stackoverflow.com/questions/53630310/use-functions-defined-in-es6-module-directly-in-html)
window.tester = tester;