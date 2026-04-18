import { Button, VariantButton } from '@/shared/ui/Button'
import { Page } from '@/widgets/Page'
import { useEffect, useState } from 'react'

const MainPage = () => {
	const [error, setError] = useState(false)
	const onThrow = () => setError(true)

	useEffect(() => {
		if (error) {
			throw new Error()
		}
	}, [error])

	return (
		<Page>
			Главная страница
			<br />
			<Button variant={VariantButton.OUTLINE} onClick={onThrow}>
				Generate Error
			</Button>
		</Page>
	)
}

export default MainPage
