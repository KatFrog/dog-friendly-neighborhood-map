import React, { Component } from 'react';

export const toggleSidebar = () => {
    let mapElement = document.getElementById('map');
    let sidebarElement = document.getElementById('sidebar');
    if (sidebarElement.classList.contains('hidden')) {
        sidebarElement.classList.remove('hidden');
        mapElement.classList.remove('map-left');
    } else {
        sidebarElement.classList.add('hidden');
        mapElement.classList.add('map-left');
    }
}


class MilkboneMenu extends Component {
    render() {
        return (
            <div>
                <label className="hidden" id="menuLabel">Button to open & close the sidebar</label>
                <span id='milkboneMenu' className='milkbone-menu' tabIndex="0"
                    aria-haspopup="true" aria-labelledby='menuLabel' role="navigation">☰</span>
            </div>
        )
    }
}

export default MilkboneMenu;
