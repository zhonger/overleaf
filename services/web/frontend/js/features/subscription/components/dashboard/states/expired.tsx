import { useTranslation } from 'react-i18next'
import { Subscription } from '../../../../../../../types/subscription/dashboard/subscription'

export function ExpiredSubsciption({
  subscription,
}: {
  subscription: Subscription
}) {
  const { t } = useTranslation()
  return (
    <>
      <p>{t('your_subscription_has_expired')}</p>
      <p>
        <a
          href={subscription.recurly.accountManagementLink}
          className="btn btn-secondary-info btn-secondary"
          target="_blank"
          rel="noreferrer noopener"
        >
          {t('view_your_invoices')}
        </a>{' '}
        <a href="/user/subscription/plans" className="btn btn-primary">
          {t('create_new_subscription')}
        </a>
      </p>
    </>
  )
}
