import { getUsers } from "@/lib/UserApiData";
import { from } from "form-data";
import { DataTable } from "./UserDataTable";
// https://github.com/postalsys/imapflow/blob/master/examples/example.js
import { ImapFlow } from "imapflow";

export default async function UserDataList() {
    // const data = await getUsers();
    const config = {
        host: 'imap.gmail.com',
        port: 993,
        secure: true,
        auth: {
            user: 'ictpamis@gmail.com',
            pass: 'zisfamdchzibfgcf'
        }
    }
    const client = new ImapFlow(config);
    client.on('error', err => {
        client.log.error(err);
    });
    client.on('close', (...args) => {
        console.log('CLOSE');
        console.log('args', ...args);
    });

    client.on('mailboxOpen', (...args) => {
        console.log('MAILBOX:OPEN');
        console.log('args', ...args);
    });

    client.on('mailboxClose', (...args) => {
        console.log('MAILBOX:CLOSE');
        console.log('args', ...args);
    });

    const main = async () => {
        // Wait until client connects and authorizes
        await client.connect();

        // Select and lock a mailbox. Throws if mailbox does not exist
        let lock = await client.getMailboxLock('INBOX');
        try {
            // fetch latest message source
            // client.mailbox includes information about currently selected mailbox
            // "exists" value is also the largest sequence number available in the mailbox
            // let message = await client.fetchOne(client.mailbox.exists, { source: true });
            /*   console.log("await client.fetchOne S");
  
  
              console.log(message.source.toString());
              console.log("await client.fetchOne END"); */
            // list subjects for all messages
            // uid value is always included in FETCH response, envelope strings are in unicode.
            for await (let message of client.fetch(' \* ', {
                uid: true,
                flags: true,
                bodyStructure: true,
                envelope: true,
                internalDate: true,
                emailId: true,
                threadId: true,
                xGmLabels: true,
                headers: [Date.now(), 'subject']
            })) {
                console.log("await client.fetchOne START");
                console.log(`UIDADESH: ${message.uid}: ${message.envelope.subject}==${message.envelope.date}`);
                console.log("await client.fetchOne END");

            }
        } finally {
            // Make sure lock is released, otherwise next `getMailboxLock()` never returns
            lock.release();
        }

        // log out and close connection
        await client.logout();
    };

    main().catch(err => console.error(err));
    return (
        <>
            <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start  container-xxl ">
                {/*begin::Post*/}
                <div className="content flex-row-fluid" id="kt_content">
                    {/*begin::Card*/}
                    <div className="card">
                        {/* <DataTable

                            data={data}

                        /> */}

                        {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}					</div>
                {/*end::Post*/}
            </div>
        </>
    )
}