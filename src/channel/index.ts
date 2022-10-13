// https://www.terraform.io/docs/providers/slack/r/channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Either of none or archive
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/channel#action_on_destroy Channel#action_on_destroy}
  */
  readonly actionOnDestroy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/channel#id Channel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/channel#is_archived Channel#is_archived}
  */
  readonly isArchived?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/channel#name Channel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/channel#purpose Channel#purpose}
  */
  readonly purpose?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/channel#topic Channel#topic}
  */
  readonly topic?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/r/channel slack_channel}
*/
export class Channel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "slack_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/slack/r/channel slack_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChannelConfig
  */
  public constructor(scope: Construct, id: string, config: ChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'slack_channel',
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
    this._actionOnDestroy = config.actionOnDestroy;
    this._id = config.id;
    this._isArchived = config.isArchived;
    this._name = config.name;
    this._purpose = config.purpose;
    this._topic = config.topic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_on_destroy - computed: false, optional: false, required: true
  private _actionOnDestroy?: string; 
  public get actionOnDestroy() {
    return this.getStringAttribute('action_on_destroy');
  }
  public set actionOnDestroy(value: string) {
    this._actionOnDestroy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnDestroyInput() {
    return this._actionOnDestroy;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
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

  // is_archived - computed: false, optional: true, required: false
  private _isArchived?: boolean | cdktf.IResolvable; 
  public get isArchived() {
    return this.getBooleanAttribute('is_archived');
  }
  public set isArchived(value: boolean | cdktf.IResolvable) {
    this._isArchived = value;
  }
  public resetIsArchived() {
    this._isArchived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isArchivedInput() {
    return this._isArchived;
  }

  // is_ext_shared - computed: true, optional: false, required: false
  public get isExtShared() {
    return this.getBooleanAttribute('is_ext_shared');
  }

  // is_org_shared - computed: true, optional: false, required: false
  public get isOrgShared() {
    return this.getBooleanAttribute('is_org_shared');
  }

  // is_shared - computed: true, optional: false, required: false
  public get isShared() {
    return this.getBooleanAttribute('is_shared');
  }

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // purpose - computed: false, optional: true, required: false
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_on_destroy: cdktf.stringToTerraform(this._actionOnDestroy),
      id: cdktf.stringToTerraform(this._id),
      is_archived: cdktf.booleanToTerraform(this._isArchived),
      name: cdktf.stringToTerraform(this._name),
      purpose: cdktf.stringToTerraform(this._purpose),
      topic: cdktf.stringToTerraform(this._topic),
    };
  }
}
