'use client'

import clsx from 'clsx';

import { CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/20/solid'

type Props = {
  variant?: 'success' | 'error' | 'warning' | false;
  title: string;
  description: string;
  action?: string;
  onAction?: () => void;
  onDismiss: () => void;
}

const Alert = ({ variant = 'success', title, description, action, onAction, onDismiss }: Props) => {
  if (!variant) {
    return null;
  }

  return (
    <div
      className={
        clsx({
          "rounded-md bg-green-50 p-4": variant === 'success', "rounded-md bg-red-50 p-4": variant === 'error', "rounded-md bg-yellow-50 p-4": variant === 'warning'
        })
      }>
      <div className="flex">
        <div className="flex-shrink-0">
          {variant === 'success' && (
            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
          )}
          {variant === 'error' && (
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          )}
          {variant === 'warning' && (
            <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
          )}
        </div>
        <div className="ml-3">
          <h3 className={clsx(
            "text-sm font-medium",
            {
              "text-green-800": variant === 'success', "text-red-800": variant === 'error', "text-yellow-800": variant === 'warning'
            }
          )}>{title}</h3>
          <div className={clsx(
            "mt-2 text-sm",
            {
              "text-green-700": variant === 'success', "text-red-700": variant === 'error', "text-yellow-700": variant === 'warning'
            }
          )}>
            <p>{description}</p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              {onAction && (
                <button
                  type="button"
                  className={clsx(
                    "rounded-md px-2 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
                    {
                      "bg-green-50 text-green-800 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50": variant === 'success',
                      "bg-red-50 text-red-800 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50": variant === 'error',
                      "bg-yellow-50 text-yellow-800 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50": variant === 'warning',
                    }
                  )}
                  onClick={onAction}
                >
                  {action}
                </button>

              )}
              <button
                type="button"
                className={clsx(
                  "rounded-md px-2 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
                  {
                    "bg-green-50 text-green-800 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50": variant === 'success',
                    "bg-red-50 text-red-800 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50": variant === 'error',
                    "bg-yellow-50 text-yellow-800 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50": variant === 'warning',
                    "ml-3": onAction !== undefined,
                  }
                )}
                onClick={onDismiss}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );

}

export default Alert
