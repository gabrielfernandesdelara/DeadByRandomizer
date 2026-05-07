async function importarPerks() {
    const resposta = await fetch('https://dbd.tricky.lol/api/perks')
    const perksDados = await resposta.json()

    const perks = Object.entries(perksDados).map(([key, perk]) => ({
        name: perk.name,
        role: perk.role,
        image: perk.image.split('/').pop() + '.png',
        description: perk.description,
        categories: perk.categories[0],
        character: perk.character
}))

    const { data, error } = await db
        .from('perks')
        .upsert(perks, { onConflict: 'name' })

    if (error) console.log('Erro:', error)
    else console.log('Perks importadas com sucesso!', perks.length)
}

importarPerks()