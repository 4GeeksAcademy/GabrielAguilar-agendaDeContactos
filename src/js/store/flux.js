const getState = ({ getStore, getActions, setStore }) => {  
	return {
		store: {
			contact: [],
			
		},
		actions: {

			loadSomeData: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/my_super_agenda_Gabriel")
					.then((response) => response.json())
					.then((data) => {
						setStore({ contact: data });
					})
	},

			addContact(newContact) {
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						"full_name": newContact.full_name,
						"email": newContact.email,
						"agenda_slug": "my_super_agenda_Gabriel",
						"address":newContact.address,
						"phone":newContact.phone,
					})
				};
				fetch('https://playground.4geeks.com/apis/fake/contact/', requestOptions)


	},

			deleteContact: (id) => {
				const deleteOptions = {
					method: "DELETE",
					headers: { 'Content-Type': 'application/json'  },
					
				};
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, deleteOptions)
					.then(response => response.json())
					.then((data =>{ 
						fetch("https://playground.4geeks.com/apis/fake/contact/agenda/my_super_agenda_Gabriel")
							.then((response) => response.json())
							.then((data) => {
								setStore({ contact: data });
							})
					

					}))
	},
				

			editContact: (editContact, id) => {
 				const editOptions = {
				method: "PUT",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					"full_name": editContact.full_name,
					"email": editContact.email,
					"agenda_slug": "my_super_agenda_Gabriel",
					"address":editContact.address,
					"phone":editContact.phone,
				})

			};
			fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, editOptions)
			.then(response => response.json())
			.then(console.log(`https://playground.4geeks.com/apis/fake/contact/${id}`));
	},	

			deleteAllContacts: () =>  {
				const deleteOptions = {
					method: "DELETE",
					headers: { 'Content-Type': 'application/json'  },
					
				};
				fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/my_super_agenda_Gabriel`, deleteOptions)
					console.log("Esta funcionado")
					.then(response => response.json())
					.then(( data =>{ 
						console.log(data)
						fetch("https://playground.4geeks.com/apis/fake/contact/agenda/my_super_agenda_Gabriel")
							.then((response) => response.json())
							.then((data) => {
								setStore({ contact: data });
							})
						}))
	},

			
			
			
		}
	};
};

export default getState;


