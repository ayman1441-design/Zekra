<script>
var addedVisitors = 100;

const STORAGE_COUNTERS_KEY = 'savedCounters';
const STORAGE_BASE_USERS   = 'baseUsers';

$(document).ready(function () {

  let baseUsers = parseInt(localStorage.getItem(STORAGE_BASE_USERS)) || 0;

  function updateCounters() {

    const $visitors = $('#visitors');
    const $busers   = $('#busers');

    if (!$visitors.length || !$busers.length) return;

    let currentVisitors =
      parseInt($visitors.attr('data-count')) ||
      parseInt($visitors.text()) ||
      0;

    let currentUsers =
      parseInt($busers.attr('data-count')) ||
      parseInt($busers.text()) ||
      0;

    baseUsers = currentUsers;

    let newVisitors = currentVisitors + addedVisitors;
    let newUsers    = baseUsers + addedVisitors;

    $visitors.text(newVisitors);
    $busers.text(newUsers);

    localStorage.setItem(
      STORAGE_COUNTERS_KEY,
      JSON.stringify({
        s1: newVisitors,
        busers: newUsers
      })
    );

    localStorage.setItem(STORAGE_BASE_USERS, baseUsers);
  }

  const observer = new MutationObserver(() => {
    observer.disconnect();

    setTimeout(() => {
      const $liveCounter = $('#visitors');
      if (!$liveCounter.length) return;

      let currentValue = parseInt($liveCounter.text()) || 0;
      let storedValue =
        parseInt(localStorage.getItem(STORAGE_BASE_USERS)) ||
        currentValue;

      let targetValue = storedValue + addedVisitors;

      if (currentValue < targetValue) {
        $liveCounter.text(targetValue);
      }

      observer.observe(
        document.getElementById('visitors'),
        {
          childList: true,
          characterData: true,
          subtree: false
        }
      );
    }, 1);
  });

  if ($('#visitors').length) {
    observer.observe(
      document.getElementById('visitors'),
      {
        childList: true,
        characterData: true,
        subtree: false
      }
    );
  }

  window.addEventListener('storage', function (event) {
    if (event.key === STORAGE_COUNTERS_KEY) {
      let data = JSON.parse(event.newValue);

      $('#visitors').text(data.s1);

      if ($('#busers').length) {
        $('#busers').text(data.busers);
      }
    }
  });

  setTimeout(updateCounters, 1000);
});
</script>