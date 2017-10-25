import axios from 'axios'
import qs from 'qs';

/*var partalFlag=false;
var testUrl='https://iservicetest.midea.com:9011/rest/';
//var testUrl='http://10.16.24.83:8080/sit2/';
var formalUrl='https://iservice.midea.com:8080/rest/';
//var formalUrl='http://10.3.8.59:8081/rest/';
//var formalUrl='http://10.3.8.59:8081/rest/';

var partalConfig=partalFlag?formalUrl:testUrl;

axios.defaults.transformRequest = [function(data) {
    return qs.stringify(data)
}];
axios.defaults.baseURL = partalConfig;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

var lanData=[{name:'Bahasa',code:'MPI'},{name:'Spanish',code:'MAC'},{name:'French',code:'MAC'}]*/
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://localhost:1000/';
function request(method, url, param, cb, errcb) {
    // token认证
    // const userToken = store('userToken')
    const config = {
        url: url,
        timeout: 1000,
        withCredentials: false,
        method: method,
        // headers: {
        //     Authorization: userToken 
        // },
        data: param
    }
    return new Promise((resolve, reject)=>{

        axios(config)
        .then((res) => {
           resolve(res.data)
        })
        .catch((error) => {
            // console.error(error)
            alert('发生错误')
        })
    })
}
export default {
    login(params){
        return request('post','test',params)
    }
}

/*export function post(...args) {
    request('post', ...args)
}

export function get(...args) {
    request('get', ...args)
}
*/

// export default {
// 	 //print
//         htmltopdfservlet(params){
//         	return axios.get('htmltopdfservlet?');
//         },
//         get_do_data_set(params){
//         	return request(post,'resources/sr/get_do_data_set;',params)
//         },

//         // contact us
//         getContactUs(params){
//         	return request(post,'resourcees/user/get_contact_us;',params)
//         },

//         // homepage
//         homepage(params){
//         	return request(post,'resources/workbench/homepage;',params)
//         },
//         notification(params){
//         	return request(post,'resources/workbench/notification;',params)
//         },

//         // test profiles
//         login(params){
//         	return request(post,'resources/login/authentication;',params)
//         },
//         loginAuthData(params){
//         	return request(post,'resources/uesr/function;',params)
//         },
//         logout(params){
//         	return request(post,'resources/user/logout;',params)
//         },
//         leftMenu(params){
//         	return request(post,'resources/user/function;',params)
//         },
//         status(params){
//         	return request(post,'resources/user/status;',params)
//         },
//         // Create customer
//         cmlov(params){
//         	return request(post,'resources/customer/geography;',params)
//         },
//         createCustomer(params){
//         	return request(post,'resources/customer/create;',params)
//         },
//         cmList(params){
//         	return request(post,'resources/customer/summary;',params)
//         },
//         cmDetail(params){
//         	return request(post,'resources/customer/detail;',params)
//         },
//         cmUpdate(params){
//         	return request(post,'resources/customer/update;',params)
//         },

//         address_lov(params){
//         	return request(post,'resources/lov/address_lov;',params)
//         },
//         address_code(params){
//         	return request(post,'resources/lov/address_code_list',params)
//         },
//         verfiy_customer(params){
//         	return request(post,'resources/customer/verfiy_customer;',params)
//         },
//         get_phone_country_code(params){
//         	return request(post,'resources/customer/get_phone_country_code;',params)
//         },
//         get_country(params){
//         	return request(post,'resources/customer/get_country;',params)
//         },
//         get_address_style(params){
//         	return request(post,'resources/customer/get_address_style;',params)
//         },

//         //get_date
//         get_date(params){
//         	return request(post,'resources/lov/get_date;',params)
//         },

//         //SR
//         get_sr_initial(params){
//         	return request(post,'resources/sr/get_sr_type;',params)
//         },
//         get_sr_init_status(params){
//         	return request(post,'resources/sr/get_sr_init_status;',params)
//         },
//         category(params){
//         	return request(post,'resources/lov/category;',params)
//         },
//         sr_item(params){
//         	return request(post,'resources/lov/item;',params)
//         },
//         owner(params){
//         	return request(post,'resources/lov/resource;',params)
//         },
//         sr_create(params){
//         	return request(post,'resources/sr/create;',params)
//         },
//         sr_summary(params){
//         	return request(post,'resources/sr/summary;',params)
//         },
//         sr_detail(params){
//         	return request(post,'resources/sr/detail;',params)
//         },
//         sr_update(params){
//         	return request(post,'resources/sr/update;',params)
//         },
//         sr_status(params){
//         	return request(post,'resources/sr/sr_updated_status;',params)
//         },
//         problem_code(params){
//         	return request(post,'resources/lov/problem_code;',params)
//         },
//         sr_group(params){
//         	return request(post,'resources/lov/group;',params)
//         },
//         resolution_code(params){
//         	return request(post,'resources/lov/resolution_code;',params)
//         },
//         instance(params){
//         	return request(post,'resources/lov/instance;',params)
//         },

//         //task
//         create_task(params){
//         	return request(post,'resources/task/create;',params)
//         },
//         priority(params){
//         	return request(post,'resources/task/priority;',params)
//         },
//         task_resource_type(params){
//         	return request(post,'resources/task/resource_type;',params)
//         },
//         task_resource(params){
//         	return request(post,'resources/task/resource;',params)
//         },
//         task_type(params){
//         	return request(post,'resources/task/type;',params)
//         },
//         task_detail(params){
//         	return request(post,'resources/task/detail;',params)
//         },
//         task_init_status(params){
//         	return request(post,'resources/task/init_status;',params)
//         },
//         task_status(params){
//         	return request(post,'resources/task/tran_status;',params)
//         },
//         task_update(params){
//         	return request(post,'resources/task/update;',params)
//         },
//         task_summary(params){
//         	return request(post,'resources/task/summary;',params)
//         },
//         //charge

//         service_activity(params){
//         	return request(post,'resources/charge/get_service_activity;',params)
//     	},
//         charge_item(params){
//         	return request(post,'resources/charge/item;',params)
//     	},
//         charge_create(params){
//         	return request(post,'resources/charge/create;',params)
//     	},
//         charge_detail(params){
//         	return request(post,'resources/charge/detail;',params)
//     	},
//         charge_update(params){
//         	return request(post,'resources/charge/update;',params)
//     	},
//         charge_reason(params){
//         	return request(post,'resources/lov/lookup_code;',params)
//     	},
//         charge_submit_order(params){
//         	return request(post,'resources/charge/submit_order;',params)
//     	},
//         charge_summary(params){
//         	return request(post,'resources/charge/summary;',params)
//     	},
//         get_subinventory(params){
//         	return request(post,'resources/charge/get_subinventory;',params)
//     	},
//         charge_delete(params){
//         	return request(post,'resources/charge/delete;',params)
//     	},
//         charge_priceListName(params){
//         	return request(post,'resources/charge/pricelist_header;',params)
//     	},
//         charge_price(params){
//         	return request(post,'resources/charge/pricelist_price;',params)
//     	},
//         picking_release(params){
//         	return request(post,'resources/charge/picking_release;',params)
//         },

//         //price list
//         getHeader(params){
//         	return request(post,'resources/pricelist/getHeader;',params)
//     	},
//         getItemDate(params){
//         	return request(post,'resources/pricelist/getItemNum;',params)
//     	},
//         getSearchDate(params){
//         	return request(post,'resources/pricelist/getLines;',params)
//     	},
//         upPriceDate(params){
//         	return request(post,'resources/pricelist/updatelines;',params)
//     	},
//         newPriceDate(params){
//         	return request(post,'resources/pricelist/createlines;',params)
//     	},

//         //report
//         srReportDate(params){
//         	return request(post,'resources/rp/srreport;',params)
//     	},
//         srReportfiledown(params){
//         	return request(post,'filedown;',params)
//     	},
//         srReportStates(params){
//         	return request(post,'resources/sr/get_sr_states_for_rp;',params)
//     	},


//         //createIB
//         create_IB(params){
//         	return request(post,'resources/ib/create;',params)
//     	},
//         serial_number(params){
//         	return request(post,'resources/lov/serial_number;',params)
//     	},
//         lot_number(params){
//         	return request(post,'resources/lov/lot_number;',params)
//         },
//         installer(params){
//         	return request(post,'resources/lov/get_installer;',params)
//         },
//         technician(params){
//         	return request(post,'resources/lov/get_tech;',params)
//         },
//         summary(params){
//         	return request(post,'resources/ib/summary;',params)
//         },
//         ib_detail(params){
//         	return request(post,'resources/ib/detail;',params)
//         },
//         ib_update(params){
//         	return request(post,'resources/ib/update;',params)
//         },
//         getDefaultInstaller(params){
//         	return request(post,'resources/ib/getDefaultInstaller;',params)
//         },
//         party(params){
//         	return request(post,'resources/ib/getnewparty;',params)
//         },
//         newAddress(params){
//         	return request(post,'resources/ib/getnewaddress;',params)
//         },
//         exchange(params){
//         	return request(post,'resources/ib/exchange;',params)
//         },

//         //file
//         file_upload(params){
//         	return request(post,'fileupload;',params)
//         },
//         file_down(params){
//         	return request(post,'filedown',params)
//         },
//         file_delete(params){
//         	return request(post,'deletefile;',params)
//         },


//         //claim
//         claimSummary(params){
//         	return request(post,'resources/claim/getunselectclaimlist;',params)
//         },
//         create_Claim(params){
//         	return request(post,'resources/claim/createclaim;',params)
//         },
//         statusType(params){
//         	return request(post,'resources/claim/getstatus;',params)
//         },
//         updateClaim(params){
//         	return request(post,'resources/claim/getclaimdetail',params)
//         },
//         updateClaimheader(params){
//         	return request(post,'resources/claim/getclaimdetail;',params)
//         },
//         getClaimLine(params){
//         	return request(post,'resources/claim/getclaimline;',params)
//         },
//         delClaimline(params){
//         	return request(post,'resources/claim/deleteclaimline;',params)
//         },
//         getclaimheader(params){
//         	return request(post,'resources/claim/getclaimheader;',params)
//         },
//         deleteclaimline(params){
//         	return request(post,'resources/claim/deleteclaimline;',params)
//         },
//         deleteclaim(params){
//         	return request(post,'resources/claim/deleteclaim;',params)
//         },
//         updateclaim(params){
//         	return request(post,'resources/claim/updateclaim;',params)
//         },
//         submitclaim(params){
//         	return request(post,'resources/claim/submitclaim;',params)
//         },
//         getsrtypes(params){
//         	return request(post,'resources/claim/getsrtypes;',params)
//         },
//         getclaimappvhis(params){
//         	return request(post,'resources/claim/getclaimappvhis;',params)
//         },
//         validation_function(params){
//         	return request(post,'resources/user/validation_function;',params)
//         },

//         //Knowledge base
//         Knowledge(){
//         	return axios.get('https//iservice.midea.com:8000/OA_HTML/ibuhpage.jsp?cux_flag=Y');
//         },
//         /*Knowledge:'http://zlobssit.midea.com:8001/OA_HTML/fndvald.jsp?',*/

//         RecentItems(params){
//         	return request(post,'resources/workbench/recent_list;',params)
//         },

//         //parts
//         OnhandInquiry(params){
//         	return request(post,'resources/sp/asp_stock;',params)
//         },
//         OnhandItems(params){
//         	return request(post,'resources/sp/stock_item_list;',params)
//         },
//         TransactionHistory(params){
//         	return request(post,'resources/sp/asp_trans;',params)
//         },
//         Summary(params){
//         	return request(post,'resources/sp/asp_trans;',params)
//         },
//         ReceiveItemList(params){
//         	return request(post,'resources/sp/receive_item_list;',params)
//         },
//         TransType(params){
//         	return request(post,'resources/sp/trans_type_list;',params)
//         },
//         TranxType(params){
//         	return request(post,'resources/sp/get_tranx_types;',params)
//         },
//         ReceiveSp(params){
//         	return request(post,'resources/sp/receive_sp;',params)
//         },
//         SubinvTransferSp(params){
//         	return request(post,'resources/sp/subinv_transfer;',params)
//         },
//         spcategory(params){
//         	return request(post,'resources/sp/category;',params)
//         },

//         //notification
//         notification_type(params){
//         	return request(post,'resources/notification/get_type;',params)
//         },
//         notification_create(params){
//         	return request(post,'resources/notification/create;',params)
//         },
//         notification_update(params){
//         	return request(post,'resources/notification/update;',params)
//         },
//         notification_receive_list(params){
//         	return request(post,'resources/notification/recent;',params)
//         },
//         notification_summary(params){
//         	return request(post,'resources/notification/summary;',params)
//         },
//         notification_detail(params){
//         	return request(post,'resources/notification/detail;',params)
//         },
//         n_file_delete(params){
//         	return request(post,'resources/notification/delete_file;',params)
//         },
//         notification_publish(params){
//         	return request(post,'resources/notification/publish;',params)
//         },

//         //parts list
//         PLsummaryh(params){
//         	return request(post,'resources/part/summaryh;',params)
//         },
//         PLdetailh(params){
//         	return request(post,'resources/part/detailh;',params)
//         },
//         LastpartList(params){
//         	return request(post,'resources/part/partList;',params)
//         },
//         OrderList(params){
//         	return request(post,'resources/part/orderList;',params)
//         },
//         OrderSpList(params){
//         	return request(post,'resources/part/shipPartList;',params)
//         },

//         //QA
//         createQA(params){
//         	return request(post,'resources/sr/createQA;',params)
//         },
//         updateQA(params){
//         	return request(post,'resources/sr/updateQA;',params)
//         },
//         getQALOV(params){
//         	return request(post,'resources/sr/getQALOV;',params)
//         },
//         getQAEng(params){
//         	return request(post,'resources/sr/getQAEng;',params)
//         },
//         getQAdetail(params){
//         	return request(post,'resources/sr/getQAdetail;',params)
//         },
//         deleteQA(params){
//         	return request(post,'resources/sr/deleteQA;',params)
//         },

//         //order
//         summaryh(params){
//         	return request(post,'resources/moveorder/summaryh;',params)
//         },
//         s_inventory(params){
//         	return request(post,+ 'resources/moveorder/defmvinv;',params)
//         },
//         des_inventory(params){
//         	return request(post,+ 'resources/moveorder/desmvinv;',params)
//         },
// 	    item_required_lov(params){
// 	    	return request(post,'resources/lov/mvitem;',params)
// 		},
// 	    create_order(params){
// 	    	return request(post,'resources/moveorder/createmv;',params)
// 		},
// 	    order_num_lov(params){
// 	    	return request(post,'resources/lov/mvreqnum;',params)
// 		},
// 	    confirm_order(params){
// 	    	return request(post,'resources/moveorder/confirm;',params)
// 		},
//         summaryl(params){
//         	return request(post,+ 'resources/moveorder/summaryl;',params)
//         },
//         detail(params){
//         	return request(post,+ 'resources/moveorder/detail;',params)
//         },

//         //PO
//         create_po(params){
//         	return request(post,+ 'resources/po/create;',params)
//         },
//         get_location(params){
//         	return request(post,+ 'resources/po/get_location;',params)
//         },
//         get_use_to(params){
//         	return request(post,+ 'resources/po/get_use_to;',params)
//         },
//         get_item_list(params){
//         	return request(post,+ 'resources/po/get_item_list;',params)
//         },
//         get_po_list(params){
//         	return request(post,+ 'resources/po/get_po_list;',params)
//         },
//         get_po_info(params){
//         	return request(post,+ 'resources/po/get_po_info;',params)
//         },
//         update_po(params){
//         	return request(post,+ 'resources/po/update;',params)
//         },
//         get_po_states(params){
//         	return request(post,+ 'resources/po/get_po_states;',params)
//         },
//         update_party_site_use(params){
//         	return request(post,+ 'resources/po/update_party_site_use;',params)
//         },
//         create_party_site_use(params){
//         	return request(post,+ 'resources/po/create_party_site_use;',params)
//         },
//         receive_po(params){
//         	return request(post,+ 'resources/po/receive_po;',params)
//         },



//         //to pdf
//         topdf(params){
//         	return request(post,+ 'resources/part/userkey;',params)
//         },
//         //location
//         location(params){
//         	return request(post,+ 'resources/charge/get_location;',params)
//         },
//         get_item_onhand(params){
//         	return request(post,+ 'resources/sp/get_item_onhand;',params)
//         },
//         update_locator(params){
//         	return request(post,+ 'resources/sp/update_locator;',params)
//         },
//         create_locator(params){
//         	return request(post,+ 'resources/sp/create_locator;',params)
//         }
// }

// 至于非json/application的情况，可以转一个data

// // 转换json为searchParams 支持请求application/x-www-form-urlencoded
// function $stringify(param) {
//     var query = []
//     for (var k in param) {
//         query.push(k + '=' + param[k])
//     }
//     return query.join('&')
// }