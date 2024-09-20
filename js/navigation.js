const root_url = window.location.origin;

on_test_button_click = () => {
    // redirect to the test page
    window.location.href = root_url + '/test.html';
    
}

on_start_game_button_click = () => {
    window.location.href = root_url + '/game.html';
}

on_home_button_click = () => {
    window.location.href = root_url + '/index.html';
}

on_about_button_click = () => {
    window.location.href = root_url + '/about.html';
}

on_instructions_button_click = () => {
    window.location.href = root_url + '/instructions.html';
}