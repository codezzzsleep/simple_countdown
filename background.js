chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    let {content,time} = message;
    setTimeout(function () {
          chrome.notifications.create(
             '',
           {
               type: 'basic',
              title: '到时间啦!',
              message: content,
              iconUrl: 'images/time.png',
           }
        );
    }, Number(time) * 1000*60);
});

  