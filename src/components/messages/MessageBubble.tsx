import { Message, MessageStatus } from '@/types';
import clsx from 'clsx';

interface MessageBubbleProps {
  message: Message;
}

interface MessageStatusIconProps {
  status: MessageStatus;
}

function MessageStatusIcon({ status }: MessageStatusIconProps) {
  if (status === 'failed') {
    return <span className="text-red-500">!</span>;
  }

  if (status === 'read') {
    return <span className="text-blue-500">✔✔</span>;
  }

  if (status === 'delivered' ) {
    return <span>✔✔</span>;
  }

  return <span>✔</span>;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isOutbound = message.direction === 'outbound';

  return (
    <div
      className={clsx(
        'flex mb-2',
        isOutbound ? 'justify-end' : 'justify-start'
      )}
    >
      <div
        className={clsx(
          'max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-sm relative',
          isOutbound
            ? 'bg-[#d9fdd3] text-gray-800 rounded-br-sm'
            : 'bg-white text-gray-800 rounded-bl-sm'
        )}
      >
        <p className="whitespace-pre-wrap break-words">
          {message.content}
        </p>

        <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-gray-500">
          <span>
            {new Date(message.timestamp).toLocaleTimeString('pt-BR', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>

          {isOutbound && (
            <MessageStatusIcon status={message.status} />
          )}
        </div>
      </div>
    </div>
  );
}
