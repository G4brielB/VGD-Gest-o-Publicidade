/* ignorar apenas teste */

async function chamarElementos () {
    $('[vgd-menu]').hide().show(500)
    $('[vgd-inicio]').hide()
    $('[vgd-footer').hide()
    $('[vgd-servico').hide()
    await $('[vgd-inicio]').fadeIn(1000)
    await $('[vgd-footer]').fadeIn(1000)
    await $('[vgd-servico]').fadeIn(1000)

    console.log('funcionou')
}

chamarElementos()

