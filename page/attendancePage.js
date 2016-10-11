/**
 * Created by sunny.yu2 on 10/10/2016.
 */
var config=require('../utility/config')
module.exports={
    url:function(){
        return config.url+'/group/'
    },
    elements:{
        attendanceTab:{
            selector:'.Button___3X-i-'
        },
        attendanceView:{
            selector:'.BaseSessionNav_content_line_heading___3gwRP'
        },
        dayViewButton:{
            selector:'.ViewNav_navButton___2otLH'
        }
    }
}