for (var i = 0; i < notes_data.Links.length; i++) {
    var html =
                "<tr> \
                    <td align='center' width='4%'><b>"+ (i + 1) + "." + "</b></td> \
                    <td align='left' ><a href='"+ notes_data.Links[i].URL + "'>" + notes_data.Links[i].Title + "</a></td> \
                    <td align='right' width='4%'>"+ notes_data.Links[i].Type + "</td> \
                </tr>"
    document.getElementById("table-body").innerHTML += html;

}
