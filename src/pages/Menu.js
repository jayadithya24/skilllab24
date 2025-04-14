import React, { useState } from 'react';
import MenuItem from '../components/MenuItem';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([
        // Mock data for menu items
        { id: 1, name: 'Gadbad Ice Cream', image: 'path/to/image', description: 'Delicious ice cream', price: 150 },
        // Add more items...
    ]);

    return (
        <div className="menu-grid">
            {menuItems.map(item => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Menu;