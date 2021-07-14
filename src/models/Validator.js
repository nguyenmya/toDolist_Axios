function Validator(){
    this.KiemTraRong = function(value, spanId, mess){
        if(value == ''){
            getEle(spanId).style.display = 'block'
            getEle(spanId).innerHTML = mess
            return false
        }
        getEle(spanId).innerHTML = ''
        return true
    }
    this.KiemTraTrung = function(arr, input, status, spanId, mess ){
        let index = arr.findIndex(function(task){
            return task.taskName == input && task.status == status
        })
        if(index !== -1){
            getEle(spanId).style.display = 'block'
            getEle(spanId).innerHTML = mess
            return false
        }
        getEle(spanId).innerHTML = ''
        return true
    }
}