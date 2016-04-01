(function(){
	function deleteRow(e){
		var table = document.getElementById("table");
		var tr = table.getElementsByTagName("tr");
		var trLength = tr.length;
			for (var i = 0; i < trLength; i++){
				var row = table.rows[i];
				var coordinatesRows = row.getBoundingClientRect();
					if ( e.clientY >= coordinatesRows.top && e.clientY <= coordinatesRows.bottom){
						if(trLength >=2){
							table.deleteRow(i);
						};
					};
			};
};
	var deleteRowClick = document.getElementById("deleteRow");
	deleteRowClick.addEventListener("click", deleteRow, false)
	
	function deleteCell(e){
		var table = document.getElementById("table");
		var td = table.getElementsByTagName("td");
		var tr = table.getElementsByTagName("tr");
		var tdLength = td.length;
			for (var k=0; k<tdLength; k++){
				var cell= table.rows[0].cells[k];
				var coordinatesCell = cell.getBoundingClientRect();
				var trLength = tr.length;
					for (var i = 0; i < trLength; i++){
						var row = table.rows[i];
							if (e.clientX >= coordinatesCell.left && e.clientX <= coordinatesCell.right){
								if(row.cells.length >=2){
									row.deleteCell(k);
								};
							};
					};
			};
	};
	var deleteCellClick = document.getElementById("deleteCell");
	deleteCellClick.addEventListener("click", deleteCell, false)
	
function mouseover(){
	var table = document.getElementById('table');
    var tr = table.getElementsByTagName('tr');
    var td = table.getElementsByTagName('td');
	var deleteRow = document.getElementById("deleteRow");
	var deleteCell = document.getElementById("deleteCell");
		if( tr.length <= 1) {
			deleteRow.style.display = "none";
		} else{
			deleteRow.style.display="block";
		};
		if (table.rows[0].cells.length <= 1){
			deleteCell.style.display = "none";
		} else {
			deleteCell.style.display="block";
		};
};
	var tableMouseOver = document.getElementById('table');
	var deleteRowMouseOver = document.getElementById("deleteRow");
	var deleteCellMouseOver = document.getElementById("deleteCell");
	tableMouseOver.addEventListener("mouseover", mouseover, false);
	deleteRowMouseOver.addEventListener("mouseover", mouseover, false);
	deleteCellMouseOver.addEventListener("mouseover", mouseover, false);

function mouseOut(){
	var deleteRow = document.getElementById("deleteRow");
	var deleteCell = document.getElementById("deleteCell");
		deleteRow.style.display="none";
		deleteCell.style.display="none";
};

	var deleteRowMouseOut = document.getElementById("deleteRow");
	var deleteCellMouseOut = document.getElementById("deleteCell");
	var tableMouseOut = document.getElementById("table");
	deleteRowMouseOut.addEventListener("mouseout", mouseOut, false) ;
	deleteCellMouseOut.addEventListener("mouseout", mouseOut, false) ;
	tableMouseOut.addEventListener("mouseout", mouseOut, false) ;

window.addEventListener("mousemove",function(e){
	var deleteRow = document.getElementById("deleteRow").offsetHeight;
	var tableHeight = document.getElementById("table").offsetHeight;
	var tableTop= document.getElementById("table").offsetTop;
	var y = e.pageY- deleteRow/2;
		if (y>=tableHeight+tableTop-deleteRow){
			y=tableHeight+tableTop-deleteRow;
		};
		if(y<= tableTop){
			y=tableTop;
		};
	document.getElementById("deleteRow").style.top = y+"px"
}, false);

(function(){
	var table = document.getElementById("table");
	var tableTop= table.offsetTop;
	var tableWidth = table.offsetWidth;
	var tableHeight = table.offsetHeight;
	var tableLeft= table.offsetLeft;
	var addCell = document.getElementById("addCell").offsetHeight;
	document.getElementById("addRow").style.top = tableHeight + tableTop + 2+"px";
	document.getElementById("addRow").style.left = tableLeft + 3 +"px";
	document.getElementById("addCell").style.top = tableTop + 3 + "px";
	document.getElementById("addCell").style.left = tableWidth + tableLeft  +2+ "px";
	document.getElementById("deleteCell").style.top = tableTop - addCell  -2+ "px";
	document.getElementById("deleteRow").style.left = tableLeft - addCell -2 + "px";
})();

window.addEventListener("mousemove",function(e){
	var deleteCell = document.getElementById("deleteCell").offsetWidth;
	var tableWidth = document.getElementById("table").offsetWidth;
	var tableLeft= document.getElementById("table").offsetLeft;
	var	x = e.pageX- deleteCell/2;
		if (x>=tableWidth+tableLeft-deleteCell){
			x=tableWidth+tableLeft-deleteCell;
		};
		if(x<= tableLeft){
			x=tableLeft;
		};
	document.getElementById("deleteCell").style.left =x+"px"
});

function addCell() {
	var table = document.getElementById('table');
    var tr = table.getElementsByTagName('tr');
		for (var i = 0; i < tr.length; i++){
			tr[i].insertCell(0);
		};
};

function addRow() {
	var table = document.getElementById('table');   
    var row = table.insertRow(-1);
        for (i=0; i < table.rows[0].cells.length; i++) {
            cell = row.insertCell(-1);
        };
	};

	var addCellClick = document.getElementById("addCell");
		addCellClick.addEventListener("click", addCell, false);
	var addRowClick = document.getElementById("addRow");
		addRowClick.addEventListener("click", addRow, false);
	 
function moveBottomButtonDown () {
	var y = document.getElementById("addRow").offsetTop;
	var yn = y + 53;
	document.getElementById("addRow").style.top = yn+"px"
} ;
function moveRightButtonRight () {
	var x = document.getElementById("addCell").offsetLeft;
	var xn = x + 53;
	document.getElementById("addCell").style.left = xn+"px"
} ;
function moveRightButtonLeft() {
	var table = document.getElementById("table");
	var td = table.getElementsByTagName("td");
	var tdLength = table.rows[0].cells.length;
	var tableCoords = table.getBoundingClientRect();
	var rightCoords = tableCoords.right;
		if (tdLength > 1){
			var y = document.getElementById("addCell").offsetLeft;
			var yn = y - 53;
			document.getElementById("addCell").style.left = yn+"px"
		};
		if (tdLength == 1){
			document.getElementById("addCell").style.left = rightCoords + 2+"px";
		};
} ;
function moveBottomButtonUp () {
	var table = document.getElementById("table");
	var tr = table.getElementsByTagName("tr");
	var trLength = tr.length;
	var tableCoords = table.getBoundingClientRect();
	var bottomCoords = tableCoords.bottom;
		if(trLength > 1){
			var x = document.getElementById("addRow").offsetTop;
			var xn = x - 53;
			document.getElementById("addRow").style.top = xn+"px";
		};
		if (trLength == 1){
			document.getElementById("addRow").style.top = bottomCoords+ 2 +"px";
		};
} ;
	var addRowMove = document.getElementById("addRow");
		addRowMove.addEventListener("click", moveBottomButtonDown, false);
	var addCellMove = document.getElementById("addCell");
		addCellMove.addEventListener("click", moveRightButtonRight, false);
	var deleteCellMove = document.getElementById("deleteCell");
		deleteCellMove.addEventListener("click", moveRightButtonLeft, false);
	var deleteRowMove = document.getElementById("deleteRow");
		deleteRowMove.addEventListener("click", moveBottomButtonUp, false);
})();







