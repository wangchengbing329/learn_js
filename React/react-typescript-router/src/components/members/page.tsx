import * as React from 'react';
import { memberAPI } from '../../api/member';
import { MemberEntity } from '../../model';
import {MemberHeader } from './memberHeader';
import {MemberRow} from './memberRow'
interface State {
    members: MemberEntity[]
}
interface Props {

}

export class MembersPage extends React.Component
<Props, State> {
    constructor (props) {
        super(props);
        this.state = {
            members: []
        }
    }
    public render () {
        return (
            <div>
                <table className="table">
                    <MemberHeader ></MemberHeader>
                    <tbody>
                        {
                            this.state.members.map(
                                (member)=>{
                                    <MemberRow key = {member.id} member={member}></MemberRow>
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

