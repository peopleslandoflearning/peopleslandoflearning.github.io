function bookCount(table) { //Changes placeholder of input to have the amount of books
	var bookCount = table.rows.length - 1;
	return bookCount;
}

/**function mergeRow(tr) { //Merges rows with the same author name
	var cell;
	var headCell = null;
	for (var i = 1; i < tr.length; i++) { 
		cell = tr[i].getElementsByTagName("td")[0];
		if (headCell == null || cell.innerText !== headCell.innerText) { 
			headCell = cell; //Keeps track of the upmost cell
		} else { //Merges cells to one
			headCell.rowSpan++;
			cell.style.display = "none"; //Latter cells are not destroyed, but not displayed
		}
	}
}**/

/**function unmergeRow(i) { //Gets rid of rowspans and redisplays the given cell
	cell = tr[i].getElementsByTagName("td")[0];
	cell.rowSpan = 1;
	cell.style.display = "";
}**/

function filterBooks(tr) { //Filters the table according to book name
	var search, filter, td, txtValue;
	col = document.getElementById("activeCol").cellIndex; //Sets to the index of the active column
	search = document.getElementById("search");
	filter = search.value.toUpperCase(); 
	for (var i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[col];
		if (td) { //If td exists
			txtValue = td.innerText || td.textContent;
			if (txtValue.toUpperCase().indexOf(filter) > -1) { //The indexOf() returns a -1 if a search is not found
				tr[i].style.display = ""; //Keeps row the way it is
				//unmergeRow(i);
			} else {
				tr[i].style.display = "none"; //Hides the entire row
			}	
		}
	}

	/**if (filter == "") { //If the input has no text in it, reset table
		mergeRow(tr);
	}**/
}

function toggleColumn(c) {
	i = c.parentNode.firstElementChild;
	do { //Make sure that there is only one active column (also remove any styling)
		i.style.color = "";
		i.removeAttribute("id");
	} while (i = i.nextElementSibling)
	c.style.color = "#e8d8a5"; //Differenciates the active column
	c.setAttribute("id", "activeCol")
}
