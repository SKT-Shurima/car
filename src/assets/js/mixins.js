var Arr = new Array(),Brr = new Array(); 
        Arr['A'] = 1; 
        Arr['B'] = 2; 
        Arr['C'] = 3; 
        Arr['D'] = 4; 
        Arr['E'] = 5; 
        Arr['F'] = 6; 
        Arr['G'] = 7; 
        Arr['H'] = 8; 
        Arr['J'] = 1; 
        Arr['K'] = 2; 
        Arr['L'] = 3; 
        Arr['M'] = 4; 
        Arr['N'] = 5; 
        Arr['P'] = 7; 
        Arr['R'] = 9; 
        Arr['S'] = 2; 
        Arr['T'] = 3; 
        Arr['U'] = 4; 
        Arr['V'] = 5; 
        Arr['W'] = 6; 
        Arr['X'] = 7; 
        Arr['Y'] = 8; 
        Arr['Z'] = 9; 
        Arr['1'] = 1; 
        Arr['2'] = 2; 
        Arr['3'] = 3; 
        Arr['4'] = 4; 
        Arr['5'] = 5; 
        Arr['6'] = 6; 
        Arr['7'] = 7; 
        Arr['8'] = 8; 
        Arr['9'] = 9; 
        Arr['0'] = 0; 
        Brr[1]=8; 
        Brr[2]=7; 
        Brr[3]=6; 
        Brr[4]=5; 
        Brr[5]=4; 
        Brr[6]=3; 
        Brr[7]=2; 
        Brr[8]=10; 
        Brr[9]=0; 
        Brr[10]=9; 
        Brr[11]=8; 
        Brr[12]=7; 
        Brr[13]=6; 
        Brr[14]=5; 
        Brr[15]=4; 
        Brr[16]=3; 
        Brr[17]=2;
const  mixins = {
    methods:{
        getHashReq(){
            let reqParams = {};
            let req = location.hash.split("?")[1];
            req = decodeURIComponent(req);
            req = req.split('&')
            for(let i = 0 ;i<req.length;i++){
                let reqUnit = req[i].split('=');
                let key = reqUnit[0];
                let val = reqUnit[1];
                reqParams[key] = val;
            }
            return reqParams ;
        },
        errorInfo(errcode,message){
            if (errcode===99) {
                this.$router.replace('/');
            }else{
                console.log(message);
            }
        },
        checkVal(val,message){
            val = val.trim();
            if (val === '') {
                Toast({
                  message: message,
                  position: 'middle',
                  duration: 3000
                });
                return false ;
            }
            return true;
        },
        checkPhone(phone){
            phone = phone.trim();
            if (phone === '') {
                Toast({
                  message: '请输入手机号',
                  position: 'middle',
                  duration: 3000
                });
                return false ;
            } else {
                let reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/g ;
                if (!reg.test(phone)) {
                    Toast({
                      message: '请输入正确手机号',
                      position: 'middle',
                      duration: 3000
                    });
                    return false ;
                }
            }
            return true;
        },
        setCookie(c_name,value,expTime){  
    		var exdate = new Date();  
    		exdate.setTime(exdate.getTime() + expTime *3600 * 1000);  
   		 	document.cookie= c_name + "=" + escape(value)+((expTime==null) ? "" : ";expires="+exdate.toGMTString());  
		},
		getCookie(c_name){  
    		if (document.cookie.length>0){  
        		var c_start=document.cookie.indexOf(c_name + "=");  
       	 		if (c_start!=-1){   
        			c_start=c_start + c_name.length+1;  
       				 var c_end=document.cookie.indexOf(";",c_start);  
       				 if (c_end==-1)   
          				c_end = document.cookie.length  
           				return unescape(document.cookie.substring(c_start, c_end))  
       			}  
    		}  
    		return ""     
		},
		delCookie(c_name){  
    		var exp = new Date();  
    		exp.setTime(exp.getTime() - 1);  
    		var cval = getCookie(c_name);  
    		if(cval!=null){  
        		document.cookie = c_name + "=" + cval + ";expires=" + exp.toGMTString();  
   			}
		},
        checkVin(sVIN){
            sVIN = sVIN.trim();
            if (sVIN=='') {
                Toast({
                  message: '请输入车架号',
                  position: 'middle',
                  duration: 3000
                });
                return false ;
            }else{
                var sKYZF="ABCDEFGHJKLMNPRSTUVWXYZ1234567890"; 
                var sJYW =''; 
                var bl = false; 
                var blKYZF = false; 
                if (sVIN.length == 17) { 
                    var iJQS=0,intTemp=0,ht = Arr,htZM = Brr; 
                    try { 
                        for (var i = 0; i <sVIN.length; i++) { 
                            if (sKYZF.indexOf(sVIN.substr(i, 1)) != -1) { 
                                blKYZF = true; 
                                iJQS = iJQS + parseInt(ht[sVIN.substr(i, 1)]) * parseInt(htZM[(i + 1)]); 
                            } else { 
                                blKYZF = false; 
                                break; 
                            } 
                        } 
                    if (blKYZF) { 
                        intTemp = iJQS%11; 
                        if (intTemp == 10) { 
                            sJYW = "X"; 
                        } else { 
                            sJYW = intTemp.toString(); 
                        } 
                        if (sJYW == sVIN.substr(8, 1)) bl = true; 
                        } else { 
                            bl = false; 
                        } 
                    } catch(err) { 
                        bl = false; 
                    } 
                }
                if (!bl) {
                    Toast({
                      message: '请输入正确车架号',
                      position: 'middle',
                      duration: 3000
                    });
                } 
                return bl; 
            }
        }
    }
};
export default mixins ;