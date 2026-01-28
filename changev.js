$(document).ready(function() {
    let lastVisitorCount = parseInt(localStorage.getItem('lastVisitorCount')) || 0;

    function updateVisitorCounts() {
        let visitorsElement = $('#visitors');
        let busersElement = $('#busers');

        if (!busersElement.length) return;

        let currentVisitors = parseInt(visitorsElement.attr('data-visitors')) || parseInt(visitorsElement.text()) || 0;
        let currentBusers = parseInt(busersElement.attr('data-busers')) || parseInt(busersElement.text()) || 0;

        lastVisitorCount = currentBusers;

        let newVisitors = currentVisitors + addedVisitors;
        let newBusers = lastVisitorCount + addedVisitors;

        visitorsElement.text(newVisitors);
        busersElement.text(newBusers);

        localStorage.setItem('visitorData', JSON.stringify({
            's1': newVisitors,
            'busers': newBusers
        }));

        localStorage.setItem('lastVisitorCount', lastVisitorCount);
    }

    let observer = new MutationObserver(mutations => {
        observer.disconnect();

        setTimeout(() => {
            let busersElement = $('#busers');
            if (!busersElement.length) return;

            let currentValue = parseInt(busersElement.text()) || 0;
            let storedValue = parseInt(localStorage.getItem('lastVisitorCount')) || currentValue;
            let newValue = storedValue + addedVisitors;

            if (currentValue < newValue) {
                busersElement.text(newValue);
            }

            observer.observe(document.querySelector('#busers'), {
                childList: true,
                characterData: true,
                subtree: false
            });
        }, 1);
    });

    if ($('#busers').length) {
        observer.observe(document.querySelector('#busers'), {
            childList: true,
            characterData: true,
            subtree: false
        });
    }

    window.addEventListener('storage', function(event) {
        if (event.key === 'visitorData') {
            let data = JSON.parse(event.newValue);
            $('#visitors').text(data.s1);
            if ($('#busers').length) {
                $('#busers').text(data.busers);
            }
        }
    });

    setTimeout(updateVisitorCounts, 1000);
});
