import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Delete Account',
  description:
    'Learn how to delete your Bill Builder account from the app profile page or by contacting support.',
}

export default function DeleteAccountPage() {
  return (
    <div className="container my-12 lg:my-24">
      <div className="max-w-5xl rounded-2xl bg-white p-8 text-gray-900 shadow-xl lg:p-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Delete Your Account</h1>
        <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
          You can delete your account directly from the profile page in the Bill Builder app.
        </p>
        <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
          If you are unable to access the app, send an email to{' '}
          <a
            className="font-semibold text-[#06402B] underline underline-offset-2"
            href="mailto:support@billbuilders.com"
          >
            support@billbuilders.com
          </a>{' '}
          and we will help you complete your account deletion request.
        </p>
      </div>
    </div>
  )
}
