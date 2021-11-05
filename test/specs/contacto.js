describe('Test in contact page', () => {

    beforeEach(async () => {

        await browser.url('/web/app/sitio/contacto');
        
    });


    it('Fill the form and assert the confirmation message', async () => {

        await $('#apellido').setValue('Apellido');

        await $('#nombre').setValue('Nombre');

        await $('#direccion').setValue('Calle falsa 123');

        await $('#correo').setValue('correo@correo.com');

        await $('#localidad').setValue('Localidad');

        await $('#telefono').setValue('3804111111');

        await $('#mensaje').setValue('probando probando');

        await $('//input[@value="Enviar"]').click();

        const text = await $('//div[@class="notification-box notification-box-success"]/p[1]');


        await expect(text).toHaveText('Gracias! Su correo ha sido enviado con éxito!Nuestro equipo le contestará a la brevedad!');
    });


    it('Click on submit button whithout fill the form and assert the error message', async () => {

        await $('//input[@value="Enviar"]').click();

        const text = await $('//body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[7]/span[1]/strong[1]');


        await expect(text).toHaveText('Por favor complete todos los campos!');
    });
});

