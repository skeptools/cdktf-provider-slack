// https://www.terraform.io/docs/providers/slack/r/usergroup_channels
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UsergroupChannelsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels#channels UsergroupChannels#channels}
  */
  readonly channels: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels#id UsergroupChannels#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels#usergroup_id UsergroupChannels#usergroup_id}
  */
  readonly usergroupId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels slack_usergroup_channels}
*/
export class UsergroupChannels extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "slack_usergroup_channels";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/slack/r/usergroup_channels slack_usergroup_channels} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UsergroupChannelsConfig
  */
  public constructor(scope: Construct, id: string, config: UsergroupChannelsConfig) {
    super(scope, id, {
      terraformResourceType: 'slack_usergroup_channels',
      terraformGeneratorMetadata: {
        providerName: 'slack',
        providerVersion: '0.8.1',
        providerVersionConstraint: '~> 0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channels = config.channels;
    this._id = config.id;
    this._usergroupId = config.usergroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channels - computed: false, optional: false, required: true
  private _channels?: string[]; 
  public get channels() {
    return cdktf.Fn.tolist(this.getListAttribute('channels'));
  }
  public set channels(value: string[]) {
    this._channels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // usergroup_id - computed: false, optional: false, required: true
  private _usergroupId?: string; 
  public get usergroupId() {
    return this.getStringAttribute('usergroup_id');
  }
  public set usergroupId(value: string) {
    this._usergroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usergroupIdInput() {
    return this._usergroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._channels),
      id: cdktf.stringToTerraform(this._id),
      usergroup_id: cdktf.stringToTerraform(this._usergroupId),
    };
  }
}
