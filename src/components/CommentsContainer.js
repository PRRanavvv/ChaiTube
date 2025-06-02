import React from 'react';

const commentsData = [
    {
        name: "Pranav Rana",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Pranav Rana",
                text: "Lorem ipsum dolor sit amet, consectetur adip"
            },
            {
                name: "Pranav Rana",
                text: "Lorem ipsum dolor sit amet, consectetur adip"
            },
        ]
    },
    {
        name: "Pranav Rana",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Pranav Rana",
                text: "Lorem ipsum dolor sit amet, consectetur adip"
            },
            {
                name: "Pranav Rana",
                text: "Lorem ipsum dolor sit amet, consectetur adip"
            }
        ]
    },
    {
        name: "Pranav Rana",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Pranav Rana",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Pranav Rana",
                        text: "Lorem ipsum dolor sit amet, consectetur adip"
                    },
                    {
                        name: "Pranav Rana",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Pranav Rana",
                                text: "jajaskpdmf nkndsk fwieo w4sdkf !!"
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        name: "Pranav Rana",
        text: "Lorem ipsum dolor sit amet, consectetur adip"
    }
];

const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className="font-semibold text-emerald-800 font-serif">COMMENTS</h1>
            {commentsData.map((comment, index) => (
                <Comment key={index} data={comment} />
            ))}
        </div>
    );
};

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex'>
            <img className='w-10 h-10' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
            <div className='px-4'>
                <p className='font-semibold'>{name}</p>
                <p>{text}</p>
                {replies && replies.length > 0 && (
                    <div className='px-4 py-4'>
                        {replies.map((reply, index) => (
                            <Comment key={index} data={reply} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentsContainer;
