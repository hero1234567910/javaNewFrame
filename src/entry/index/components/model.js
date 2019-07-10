import evn from '../utils/evn.js'

function model(http) {

  return {
    // 查询并绑定
    bindUser(data) {
      return http.put(evn.SEC_HOSAPI+'/wx/common/bindInfo',data,{
      	headers:{
      		contentType:'application/json;charset=utf-8'
      	}
      });
    },
    savePatient(data){
    	return http.post(evn.SEC_HOSAPI+'/wx/common/bingdingPatient',data,{
    		headers:{
    			contentType:'application/json;charset=utf-8'
    		}
    	})
    }
  }

}

export default model