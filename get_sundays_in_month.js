 function get_sundays(month, year){
            
                var result = [];
                
                var sunday = moment(year + '-' + month).day("Sunday");

                if (sunday.date() > 7) sunday.add(7,'d');

                var month = sunday.month();

                while(month === sunday.month()){

                    result.push(sunday.toString());

                    sunday.add(7,'d');

                }

                return result.length;

        }
