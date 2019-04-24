//fanshuhai 2018/10/19
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';   //配置请求头
//axios.defaults.baseURL = 'http://10.1.2.76:9260/';   //配置接口地址
//axios.defaults.baseURL = 'http://10.1.2.60:9320/'
//axios.defaults.baseURL = 'http://10.1.2.232:9320/';   //配置接口地址
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
//	axios.defaults.withCredentials=true;
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        // reject(error)
      })
  })
}

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        // reject(error)
      });
  })
}

export function getYYDDMM(value){
  let year=value.getFullYear();
  let month=value.getMonth()+1<10?"0"+(value.getMonth()+1):value.getMonth()+1;
  let day=value.getDate()<10?"0"+value.getDate():value.getDate();
  let datestr=year+'-'+month+'-'+day;
  return  datestr;
}

export function validataName(rule,value,callback){
    if(value===''){
  callback(new Error('请输入姓名'));
    }else{
      callback();
    }
};

export function validataCardId(rule,value,callback){
  let regId=/(^\d{15}$)|(d{18}$)|(^\d{17}(\d|X|x)$)/;
  let cardIdValue=$.trim(value);
  if(value===''){
    callback(new Error('请输入身份证号！'))
  }else if(regId.test(cardIdValue)===false){
    callback(new Error('身份证号码不正确！'));
  }else{
    callback();
  }
};

export function validataPhone(rule,value,callback){
  let regPhone=/^1[0-9]{10}$/;
  let phoneValue=$.trim(value);
  if(value===''){
    callback(new Error('请输入手机号码！'))
  }else if(regPhone.test(phoneValue)===false){
    callback(new Error('手机号码不正确！'))
  }else{
    callback();
  }
};

export function validataBankcard(rule,value,callback){
  let regBank=/^(\d{16}|\d{19})$/;
  let BankValue=$.trim(value);
  // console.log(value)
  if(value===''){
    callback(new Error('请输入银行卡号！'))
  }else if(regBank.test(BankValue)===false){
    callback(new Error('银行卡号格式不正确！'))
  }else{
    callback();
  }
};

//export function validataEnterPrise(rule,value,callback){
//let regEntr=/.*[\u4e00-\u9fa5]+.*$/;
//let BankValue=$.trim(value);
//// console.log(value)
//if(value===''){
//  callback(new Error('请输入企业名称/企业注册号!'))
//}else if(regEntr.test(BankValue)===false){
//  callback(new Error('银行卡号格式不正确！'))
//}else{
//  callback();
//}
//};
export function validataEnterPrise(rule,value,callback){
    if(value===''){
  callback(new Error('请输入企业名称/企业注册号'));
    }else{
      callback();
    }
};














