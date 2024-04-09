import { json } from '@sveltejs/kit'
import { MINUTE } from 'svelte-api-keys'

const rate = { rate: 30 / MINUTE, size: 10 }

export async function GET({ locals }) {
	const { remaining, reset } = await locals.api.has('read').limit(rate)
	return json({ rate, remaining, reset })
}

export async function PUT({ locals }) {
	const { remaining, reset } = await locals.api.has('write').limit(rate)
	return json({ rate, remaining, reset })
}
