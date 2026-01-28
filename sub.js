$(`<center>
  <div style="position: static;width: 100%;" onclick="setTimeout(function(){fixSize();},800);">
    <div width="99.5%" id="design-a" style="background: linear-gradient(to bottom, #d6e9f5, #e8f4fa);color: #0d3d5c;border-bottom: 3px solid #1e5a8e;border-top: 3px solid #2874b5;padding-bottom: 2px;border-radius: 0px 0px 15px 15px;cursor: pointer;">
      <div style="text-align: center;">
        <u><b><font color="red">الإشتراكات والفعالياات</font></b></u>
      </div>
      <div id="spanan" style="font-family: jazeera-light, 'Cairo', sans-serif;color: #0d3d5c;text-align: center;display:none;">
        <p style="text-align: center;margin: 2px 0;"><b><font color="#ad0000">نتمنّى لكم صنع ذكريات سعيدة في شات ذكرى الخليج، الفعاليات الحالية : روم المسابقات (مسابقات يومية على مدار الساعة) ، روم الفعاليات (فعاليات متنوعة يومية) الحائط (كت تويت وإبداع متواصل) (</font></b></p>
        <p style="text-align: center;margin: 2px 0;"><b>أنواع الإشتراكات:</b></p>
        <p style="text-align: center;margin: 2px 0;"><b><font color="#1e5a8e">سوبر اشتراك</font> - <font color="red">500 ريال شهرياً</font></b></p>
        <p style="text-align: center;margin: 2px 0;"><b><font color="#1e5a8e">سوبر اشتراك كامل</font> - <font color="red">750 ريال شهرياً</font></b></p>
        <p style="text-align: center;margin: 2px 0;">
          <a href="https://zekra.net/esh.html" target="_blank" onclick="event.stopPropagation();" style="color: #1e5a8e; font-weight: bold; text-decoration: underline;">صفحة الإشتراكات</a> | 
          <a href="https://zekra.net/rules.html" target="_blank" onclick="event.stopPropagation();" style="color: #1e5a8e; font-weight: bold; text-decoration: underline;">قوانين الشات</a> | 
          <a href="https://zekra.net/decoration.html" target="_blank" onclick="event.stopPropagation();" style="color: #1e5a8e; font-weight: bold; text-decoration: underline;">زخرفة الإسم</a>
        </p>
        <p style="text-align: center;margin: 2px 0 0 0;padding-bottom: 5px;"><u><b><font color="red">الإدارة | وريد</font></b></u></p>
      </div>
    </div>
  </div>
</center>`).insertBefore('#d2');

$("#design-a").click(function() {
  $("#spanan").slideToggle(function(){});
});
