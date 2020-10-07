function get_sundays(){

            let start = "August 2020";
           
            var d = new Date('1 ' + start);
            var ndays = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
            alert(Math.floor((ndays + (d.getDay() + 6) % 7) / 7));

}
