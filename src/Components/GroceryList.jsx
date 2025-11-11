import React, { useEffect, useState } from "react";

const GroceryList = () => {
    const defaultItems = [
        { name: "Dal 1/2kg", price: 75, value: "kg", quantity: 1 / 2, checked: true },
        { name: "Top", price: 30, value: "piece", quantity: 1, checked: true },
        { name: "Snax", price: 25, value: "piece", quantity: 1, checked: true },
        { name: "Maggi", price: 30, value: "piece", quantity: 2, checked: true },
        { name: "Pears 22rs", price: 22, value: "piece", quantity: 1, checked: true },
        { name: "Sattu", price: 85, value: "kg", quantity: 1 / 2, checked: true },
        { name: "Haldi", price: 30, value: "kg", quantity: 1 / 10, checked: true },
        { name: "Parle g", price: 20, value: "piece", quantity: 4, checked: true },
        { name: "50-50", price: 20, value: "piece", quantity: 4, checked: true },
        { name: "Achar masala", price: 30, value: "kg", quantity: 1 / 4, checked: true },
        { name: "Chips", price: 20, value: "kg", quantity: 1 / 4, checked: true },
        { name: "Mustard oil", price: 185, value: "litre", quantity: 1, checked: true },
        { name: "Refine oil", price: 80, value: "litre", quantity: 1, checked: true },
        { name: "Tez patta", price: 15, value: "kg", quantity: 1 / 10, checked: true },
        { name: "Bartan zali", price: 15, value: "piece", quantity: 1, checked: true },
        { name: "Good day biscuit", price: 40, value: "piece", quantity: 1, checked: true },
        { name: "Methi", price: 25, value: "kg", quantity: 1 / 10, checked: true },
        { name: "Zeebha", price: 20, value: "piece", quantity: 1, checked: true },
        { name: "Kasuri methi", price: 40, value: "kg", quantity: 1 / 10, checked: true },
        { name: "Kasmiri mirch", price: 100, value: "kg", quantity: 1 / 10, checked: true },
        { name: "Handwash", price: 10, value: "piece", quantity: 1, checked: true },
        { name: "Chilly powder 100gm", price: 40, value: "kg", quantity: 1 / 10, checked: true },
        { name: "Dhania", price: 40, value: "kg", quantity: 1, checked: true },
        { name: "Black pepper", price: 45, value: "kg", quantity: 1 / 10, checked: true },
        { name: "Small elaichi", price: 30, value: "pack", quantity: 1, checked: true },
        { name: "Green chilly sauce", price: 70, value: "piece", quantity: 1, checked: true },
        { name: "Tooth paste", price: 150, value: "piece", quantity: 10, checked: true },
        { name: "Yipee x 2", price: 30, value: "piece", quantity: 1, checked: true },
        { name: "Good night", price: 75, value: "piece", quantity: 1, checked: true },
        { name: "Bug spray", price: 230, value: "piece", quantity: 1, checked: true },
        { name: "Zeera", price: 50, value: "kg", quantity: 1 / 10, checked: true },
        { name: "Ketchup 15rs pack", price: 15, value: "kg", quantity: 1 / 10, checked: true },
        { name: "Dettol 10rs piece", price: 40, value: "piece", quantity: 4, checked: true },
        { name: "Garlic", price: 50, value: "kg", quantity: 1 / 4, checked: true },
        { name: "Rock Salt", price: 20, value: "kg", quantity: 1 / 4, checked: true },
        { name: "Odonil", price: 50, value: "piece", quantity: 1, checked: true },
        { name: "Coil", price: 35, value: "piece", quantity: 1, checked: true },
        { name: "Badam roasted", price: 30, value: "kg", quantity: 1 / 4, checked: true },
        { name: "Banana", price: 40, value: "piece", quantity: 12, checked: true },
        { name: "Eggs x 4", price: 28, value: "piece", quantity: 1, checked: true },
        { name: "Mobile", price: 50, value: "piece", quantity: 1, checked: true },
        { name: "Sugar", price: 25, value: "kg", quantity: 1 / 2, checked: true },
        { name: "Besan", price: 60, value: "kg", quantity: 1 / 5, checked: true },
        { name: "Tea leaf", price: 25, value: "kg", quantity: 1 / 10, checked: true },
    ];
    const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("groceryItems");
    return saved ? JSON.parse(saved) : defaultItems;
  });

    const [editIndex, setEditIndex] = useState(null);
    const [editName, setEditName] = useState("");
    const [editPrice, setEditPrice] = useState("");
    const [editQuantity, setEditQuantity] = useState("");
    const [editValue, setEditValue] = useState("");

    useEffect(() => {
        localStorage.setItem("groceryItems", JSON.stringify(items));
    }, [items]);

    const toggleCheck = (index) => {
        const updated = [...items];
        updated[index].checked = !updated[index].checked;
        setItems(updated);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditName(items[index].name);
        setEditPrice(items[index].price);
        setEditQuantity(items[index].quantity);
        setEditValue(items[index].value);
    };

    const handleSave = (index) => {
        const updated = [...items];
        updated[index].name = editName;
        updated[index].price = Number(editPrice) || 0;
        updated[index].quantity = Number(editQuantity) || 0;
        updated[index].value = editValue;
        setItems(updated);
        setEditIndex(null);
    };

    const total = items
        .filter((item) => !item.checked)
        .reduce((sum, item) => sum + item.price, 0);

    const formatQuantity = (quantity, unit) => {
        if (unit === "kg" && quantity < 1) {
            return `${quantity * 1000} gm`;
        }
        if (unit === "litre" && quantity < 1) {
            return `${quantity * 1000} ml`;
        }
        return `${quantity} ${unit}`;
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-green-100 to-lime-200 p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 text-green-800">Grocery Checklist</h1>

            <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-between px-6 border-b py-2 rounded-lg hover:bg-green-50 transition ${!item.checked ? "opacity-100" : "opacity-60"
                            }`}
                    >
                        <div className="flex items-center gap-3 w-full">
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => toggleCheck(index)}
                                className="w-5 h-5 accent-green-600"
                            />

                            {editIndex === index ? (
                                <div className="flex gap-2 w-full">
                                    <input
                                        type="text"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                        className="border rounded px-2 py-1 w-full"
                                    />
                                    <input
                                        type="text"
                                        value={editQuantity}
                                        onChange={(e) => setEditQuantity(e.target.value)}
                                        className="border rounded px-2 py-1 w-20 text-center"
                                    />
                                    <input
                                        type="text"
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                        className="border rounded px-2 py-1 w-24 text-center"
                                    />
                                    <input
                                        type="number"
                                        value={editPrice}
                                        onChange={(e) => setEditPrice(e.target.value)}
                                        className="border rounded px-2 py-1 w-20 text-right"
                                    />
                                    <button
                                        onClick={() => handleSave(index)}
                                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                                    >
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <span
                                        onClick={() => handleEdit(index)}
                                        className={`flex-1 cursor-pointer ${!item.checked
                                                ? "text-gray-900 font-semibold"
                                                : "line-through text-gray-500"
                                            }`}
                                    >
                                        {item.name}
                                    </span>
                                    <span
                                        onClick={() => handleEdit(index)}
                                        className="flex-1 cursor-pointer text-gray-700"
                                    >
                                        {formatQuantity(item.quantity, item.value)}
                                    </span>
                                    <span
                                        onClick={() => handleEdit(index)}
                                        className="cursor-pointer font-semibold text-green-700"
                                    >
                                        ₹{item.price}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                ))}

                <div className="flex justify-between items-center mt-6 text-xl font-bold text-green-800">
                    <span>Total (checked)</span>
                    <span>₹{total}</span>
                </div>
            </div>
        </div>
    );
};

export default GroceryList;