const M = [
  {
    dec: 'الاسم هنا',
    cls: 'shbl_str',
    icon: 'https://up6.cc/2025/08/175607860400631.gif'
  },
  {
    dec: 'تجربة',
    cls: 'تجربة1',
    icon: 'https://up6.cc/2025/08/175607876090252.png'
  }
];

// مراقب تغييرات DOM
const E = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      const addedNodes = mutation.addedNodes;
      
      addedNodes.forEach(node => {
        // التحقق من أن العنصر المضاف هو رسالة في منطقة الدردشة
        if (node.nodeType === 1 && node.matches('#d2 .uzr')) {
          
          // التحقق من كل مستخدم في القائمة
          M.forEach(user => {
            const userElement = $(node).find('div:first-child:contains(\'' + user.dec + '\')');
            
            if (userElement.length) {
              const messageContainer = $(node);
              
              // إضافة class مخصص للرسالة
              if (!messageContainer.hasClass(user.cls)) {
                messageContainer.addClass(user.cls);
                
                // إضافة الأيقونة إذا لم تكن موجودة
                if (!messageContainer.find('.itar_shbl').length) {
                  messageContainer.find('.fitimg.u-pic').append(
                    '<img style="max-width: 77px; margin-top: -12px; margin-left: -14px;" ' +
                    'class="itar_shbl" title="اطاري" src="' + user.icon + '">'
                  );
                }
              }
            }
          });
        }
      });
    }
  });
});

// بدء المراقبة على عنصر الدردشة
const chatContainer = document.querySelector('#d2');
E.observe(chatContainer, {
  childList: true,
  subtree: true
});

// إضافة أنماط CSS مخصصة
$('style').last().append(`
  /* تنسيقات شبل اليمن */
  #d2 .uzr.shbl_str .u-topic {
    -webkit-text-fill-color: #0000;
  }
  
  #d2 .uzr.shbl_str .fitimg.u-pic {
    height: 52px!important;
    border-radius: 100px!important;
    margin-bottom: 3px!important;
    margin-top: 1px!important;
    box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 6px #000;
    filter: hue-rotate(360deg);
    box-shadow: 0 0 0 #000000, inset 0 0 4px #000000, 0 0 0 0 #000;
  }
  
  #d2 .uzr.shbl_str .u-msg.break {
    margin-left: 5px!important;
    -webkit-background-clip: text;
    -webkit-text-fill-color: #0000;
    background-image: linear-gradient(-225deg, #000 0%, #353535 29%, #f00 67%, #000 100%);
    padding: 0px!important;
    font-size: 100%!important;
    background-size: cover;
  }
  
  #d2 .uzr.shbl_str .itar_shbl {
    width: 94px;
    height: 94px;
    margin-top: -40px;
    cursor: pointer;
    margin-left: -55px;
  }
  
  #d2 .uzr.d-flex.mm.shbl_str {
    border-radius: 0 10px 0 10px;
  }
  
  #d2 .uzr.d-flex.mm.hmsg.shbl_str {
    background-image: url(https://up6.cc/2025/08/175607876087531.jpg);
    background-size: 100%;
    border: 1px solid #fff;
    box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 2px #000;
    margin-bottom: 3px!important;
    margin-top: 2px!important;
    background-color: #16202a00!important;
    border-radius: 0 0 0;
  }
  
  #d2 .uzr.d-flex.mm.pmsgc.shbl_str {
    background-image: url(https://up6.cc/2025/08/175607876087531.jpg);
    background-size: 100%;
    border: 1px solid #fff;
    box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 2px #000;
    margin-bottom: 3px!important;
    margin-top: 2px!important;
    background-color: #16202a00!important;
  }
  
  #room .uzr.shbl_str .btn-primary {
    border-radius: 0 10px 0 10px!important;
    box-shadow: inset 0 0 0 rgb(0 0 0 / .08), 0 0 1px #000;
    border: 1px solid #fff;
    background-image: url(https://up6.cc/2025/08/175607876087531.jpg);
    background-size: cover;
    color: #484848;
    font-size: 14px!important;
    -webkit-text-fill-color: #000;
    margin-left: 4px!important;
  }

  /* تنسيقات مشابهة للمستخدمين الآخرين... */
  /* (الكود يحتوي على تنسيقات CSS مماثلة لكل مستخدم) */
`);
