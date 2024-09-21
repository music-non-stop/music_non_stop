const root_url = window.location.origin + '/dimitri';

on_test_button_click = () => {
    // redirect to the test page
    window.location.href = root_url + '/test.html';
    
}

on_home_button_click = () => {
    window.location.href = root_url + '/index.html';
}