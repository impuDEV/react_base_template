import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { Button } from '@/shared/ui/Button'

interface PageErrorProps {
	className?: string
}

export const PageError = memo((props: PageErrorProps) => {
	const { className } = props

	const reloadPage = () => {
		location.reload()
	}

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			UnknownError
			<Button onClick={reloadPage}>Reload page</Button>
		</div>
	)
})
