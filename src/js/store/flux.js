const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/my_super_agenda_Gabriel")
					.then(resp => {
						console.log("is response succesful: " + resp.ok);
						console.log("status code: "+ resp.status); 
						return resp.json(); 
					})
					.then(data => {
						console.log(data);
						setStore({contacts: data})
						console.log(getStore().contacts)
					})
					.catch(error => {
						console.log(error);
					});
			},

			uploadContacts: (newContact) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
				method: "POST",
				headers: {
				  "Content-Type": "application/json",
				},
				body: JSON.stringify(newContact),
			  })
			  .then(response => {
				console.log(response)
				getActions().getContacts()})
			.catch(error => console.log(error))
			},
				
			editContact: (contact) => {
				fetch(`https://playground.4geeks.de/apis/fake/contact/${contact.id}`, {
					method: "PUT",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify(contact),
				})
				.then(response => {
					console.log(response)
					getActions().getContacts()})
				.catch(error => console.log(error))
			},
				
			deleteContact: (id) => {
				fetch(`https://playground.4geeks.de/apis/fake/contact/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					  },
				})
				.then(response => {
					console.log(response)
					getActions().getContacts()})
				.catch(error => console.log(error))
			}
		}		
	};
};

export default getState;