// ========== الجزء الأول: قائمة المستخدمين المميزين ==========

const specialUsers = [
  { name: 'َSaz', icon: 'https://www.raed.net/img?id=1487353' },
  { name: 'الاسم هنا', icon: 'https://up6.cc/2025/06/17496711765404.gif' }
];

// تعيين قوة المستخدم
setPower();

function setPower() {
  const userElement = $(users).find('.uzr.uid' + myid);

  if (!userElement || !userElement.length) {
    window.mypower = 0;
    return;
  }

  const powerValue = parseInt(userElement.attr('v'));

  if (isNaN(powerValue)) {
    window.mypower = 0;
    return;
  }

  window.mypower = powerValue;
}

// تعيين خاصية ignoreWhenFirstLogin لكل مستخدم
specialUsers.forEach(user => {
  user.ignoreWhenFirstLogin = true;
});

// عرض تأثير دخول المستخدم المميز
function displayRoaylLogin(userElement, userConfig) {
  if (userConfig.toggled) return;

  userConfig.toggled = true;

  // الحصول على صورة المستخدم
  const userPicUrl = userElement.find('.u-pic')
    .css('background-image')
    .replace('url("', '')
    .replace('")', '');

  // إضافة العناصر المتحركة
  const animationContainer = $(body).append(
    '<div>' +
      '<img class="ro_te3b_img" style="position: absolute; top: 3rem; left: -300px; border-radius: 50%" ' +
        'width="78" height="78" src="' + userPicUrl + '" />' +
      '<img class="ro_te3b_img" style="position: absolute; top: 1rem; left: -300px; border-radius: 0%" ' +
        'width="329" height="173" src="' + userConfig.icon + '" />' +
    '</div>'
  );

  // تحريك الصورة الأولى (صورة المستخدم)
  animationContainer.find('img:nth-child(1)').animate({ left: '40px' }, 400, function() {
    const img = $(this);
    setTimeout(function() {
      if (img.hasClass('ro_te3b_img')) {
        img.animate({ left: '-100px' }, 400, function() {
          img.remove();
        });
      }
    }, 3000);
  });

  // تحريك الصورة الثانية (أيقونة الرتبة)
  animationContainer.find('img:nth-child(2)').animate({ left: '0px' }, 400, function() {
    const img = $(this);
    setTimeout(function() {
      if (img.hasClass('ro_te3b_img')) {
        img.animate({ left: '-150px' }, 400, function() {
          img.remove();
        });
      }
    }, 3000);
  });
}

// التحقق الدوري من دخول المستخدمين
setInterval(() => {
  if (!$(users).find('.uzr.uhtml').length) return;

  specialUsers.forEach(userConfig => {
    const userElement = $(users).find(".uzr:contains('" + userConfig.name + "')");

    // التحقق من الصلاحيات
    if (userElement.css('display') == 'none' &&
        window.mypower < parseInt(userElement.attr('v'))) {
      return;
    }

    const isMyAccount = userElement && userElement.length && userElement.hasClass('uid' + myid);
    const userExists = !!userElement.length;

    // التحقق من الغرفة
    if (userConfig.room) {
      if (!userExists && !isMyAccount) {
        return userConfig.toggled = false;
      }

      if (userConfig.room == myroom) {
        return displayRoaylLogin(userElement, userConfig);
      }

      return userConfig.toggled = false;
    }

    // التحقق من حسابي الخاص
    if (isMyAccount) {
      return displayRoaylLogin(userElement, userConfig);
    }

    // إذا لم يكن المستخدم موجود
    if (!userExists) {
      if (userConfig.toggled != undefined) {
        userConfig.ignoreWhenFirstLogin = false;
      }
      return userConfig.toggled = false;
    }

    // تجاهل أول دخول
    if (userConfig.ignoreWhenFirstLogin) return;

    displayRoaylLogin(userElement, userConfig);
  });
}, 3000);
