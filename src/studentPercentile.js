var demo = angular.module('demo', []);
demo.directive('studentPercentile', function() {
    return {
        restrict: 'EA',
        templateUrl: "src/studentPercentile.html",
        controller: "StudentPercentileController"
    }});
demo.controller('StudentPercentileController', function ($scope) {
    
    var studentGPAArray = [];
    $scope.studentData = [{id: "471908US", name: "Randy Perez", gpa: 1.60},
                          {id: "957625US", name: "Alice Brown", gpa: 3.50},
                          {id: "909401US", name: "Maria Russell", gpa: 3.90},
                          {id: "342575US", name: "Shirley Evans", gpa: 3.5},
                          {id: "780367US", name: "Daniel Bell", gpa: 2.20},
                          {id: "841786US", name: "Willie Richardson", gpa: 3.60},
                          {id: "881365US", name: "Ruby Lee", gpa: 2.70},
                          {id: "848124US", name: "Peter Powell", gpa: 2.30},
                          {id: "497579US", name: "Bruce Nelson", gpa: 3.70},
                          {id: "756454US", name: "Bonnie Murphy", gpa: 3.50},
                          {id: "551871US", name: "Chris Mac Cooper", gpa: 2.70},
                          {id: "734476US", name: "Christine Walker", gpa: 2.70},
                          {id: "138197US", name: "Alan Robinson", gpa: 1.80},
                          {id: "755435US", name: "Philip Allen", gpa: 2.90},
                          {id: "744270US", name: "Justin Scott", gpa: 3.80},
                          {id: "140419US", name: "James Edwards", gpa: 2.40},
                          {id: "263737US", name: "Ann Mitchell", gpa: 3.60},
                          {id: "522471US", name: "Eugene Rivera", gpa: 3.50},
                          {id: "022169US", name: "Irene Simmons", gpa: 2.20},
                          {id: "690697US", name: "Joshua Uber", gpa: 3.60},
                          {id: "094778US", name: "Jonathan Reed", gpa: 3.50},
                          {id: "73780US", name: "Johnny Ross", gpa: 2.20},
                          {id: "256090US", name: "Jessica Howard", gpa: 3.60},
                          {id: "775011US", name: "Frank Kelly", gpa: 2.20},
                          {id: "333218US", name: "Kathy Patterson", gpa: 3.7}];

    for(var k in $scope.studentData){
        studentGPAArray.push($scope.studentData[k].gpa);
    }
    studentGPAArray = studentGPAArray.sort();

    $scope.getStudentPercentile = function(studentgpa){
    	var getlowerGPAOccurence = findlowerGPAOccurrences(studentGPAArray, studentgpa);
        var getGPAOccurence = findOccurrences(studentGPAArray, studentgpa);
        var studentPercentile = ((getlowerGPAOccurence + 0.5*getGPAOccurence)/studentGPAArray.length)*100;
        return Math.round(studentPercentile);
    };

    var findOccurrences = function (arr, val) {
        var i, j = arr.length, count = 0;
        for (i = 0; i < j; i++) {
            (arr[i] === val) && count++;
        }
        return count;
    }
    var findlowerGPAOccurrences = function (arr, val) {
    	var i, j = arr.length, count = 0;
        for (i = 0; i < j; i++) {
        	if((val - arr[i]) > 0)
        	{
        		count++
        	}
        }
        return count;
    }
});
