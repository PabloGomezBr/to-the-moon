import { alertController } from '@ionic/core';
import { Component, h, State } from '@stencil/core';

@Component({
	tag: 'app-home',
	styleUrl: 'app-home.css',
})
export class AppHome {
	@State() isToggleChecked = false;

	async handleToggle() {
		const alert = await alertController.create({
			cssClass: 'alert-imagen',
			message: `<ion-img id="img" src="../assets/img/yo.jpg" />`,
			mode: 'ios',
			buttons: [
				{
					text: 'OMG',
					cssClass: 'secondary',
					handler: () => {
						document.getElementById('img').classList.add('rotate-right');
						document.getElementsByClassName('alert-imagen')[0].classList.add('rotate-left');
						return false;
					},
				},
			],
		});

		await alert.present();
	}

	render() {
		return (
			<ion-card>
				<ion-card-header>
					<ion-card-title color="primary">
						<h1>VAMOS TO THE MOON!!</h1>
					</ion-card-title>
				</ion-card-header>
				<ion-card-content>
					<ion-button color="secondary" onClick={() => this.handleToggle()}>
						Pulsame para empezar!
					</ion-button>
				</ion-card-content>
			</ion-card>
		);
	}
}
