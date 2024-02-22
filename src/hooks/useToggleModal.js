import React, {useState} from "react";

export const useToggleModal = ({onOpen, onClose}) => {
	const [isOpen, setIsOpen] = useState(false);
	
	const toggler = () => {
		const nextIsOpen = !isOpen;
		setIsOpen(nextIsOpen);

		if(nextIsOpen) {
	onOpen();
} else {
	onClose();
}
}

return [isOpen, toggler];
}
